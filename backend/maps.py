from flask import Blueprint, request, jsonify
import requests
import os
import sqlite3

maps = Blueprint("maps", __name__)
DB_PATH = 'database.db'

@maps.route("/places")
def places():
    query = request.args.get("query", "cafe")
    lat = request.args.get("lat")
    lng = request.args.get("lng")
    radius = request.args.get("radius", 5000)
    url = "https://maps.googleapis.com/maps/api/place/textsearch/json"
    params = {
        "query": query,
        "key": os.environ.get("VITE_GOOGLE_API_KEY")
    }
    #lat/lng, provided, search nearby
    if lat and lng:
        params["location"] = f'{lat}, {lng}'
        params['radius'] = radius    
    response = requests.get(url, params=params)
    return jsonify(response.json())

@maps.route("/markers/<int:user_id>", methods = ["GET"])
def get_markers(user_id):
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM markers WHERE user_id = ?", (user_id,))
    markers = [dict(row) for row in cursor.fetchall()]
    conn.close()
    return jsonify(markers)

@maps.route("/markers", methods = ["POST"])
def add_marker():
    data = request.get_json()
    user_id = data.get("user_id")
    latitude = data.get("latitude")
    longitude = data.get("longitude")
    description = data.get("description", "")
    if not all([user_id, latitude, longitude]):
        return jsonify({"success": False, "message": "Missing data"}), 400
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO markers (user_id, latitude, longitude, description) VALUES (?,?,?,?)",
        (user_id, latitude, longitude, description)
    )
    conn.commit()
    conn.close()
    return jsonify({"success": True, "message": "marker added"}), 201
