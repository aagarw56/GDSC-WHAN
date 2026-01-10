from flask import Blueprint, request, jsonify
import requests
import os
import sqlite3
from flask_jwt_extended import jwt_required, get_jwt_identity

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
        "key": os.environ.get("GOOGLE_MAPS_API_KEY")
    }
    #lat/lng, provided, search nearby
    if lat and lng:
        params["location"] = f'{lat}, {lng}'
        params['radius'] = radius    
    response = requests.get(url, params=params)
    return jsonify(response.json())

@maps.route("/markers", methods=["GET"])
@jwt_required()
def get_markers():
    user_id = get_jwt_identity()

    with sqlite3.connect(DB_PATH, timeout=10) as conn:
        conn.row_factory = sqlite3.Row
        rows = conn.execute(
            "SELECT * FROM markers WHERE user_id = ?",
            (user_id,)
        ).fetchall()

    return jsonify([dict(row) for row in rows])

@maps.route("/markers", methods=["POST"])
@jwt_required()
def add_marker():
    user_id = get_jwt_identity()
    data = request.get_json()

    latitude = data.get("latitude")
    longitude = data.get("longitude")
    description = data.get("description", "")

    if latitude is None or longitude is None:
        return jsonify({"success": False, "message": "Missing coordinates"}), 400

    with sqlite3.connect(DB_PATH, timeout=10) as conn:
        conn.execute(
            """
            INSERT INTO markers (user_id, latitude, longitude, description)
            VALUES (?, ?, ?, ?)
            """,
            (user_id, latitude, longitude, description)
        )
        conn.commit()

    return jsonify({"success": True, "message": "Marker added"}), 201
