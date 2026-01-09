from flask import Blueprint, request, jsonify
import requests
import os

google_api = Blueprint("google_api", __name__)

@google_api.route("/places")
def places():
    query = request.args.get("query", "cafe")

    url = "https://maps.googleapis.com/maps/api/place/textsearch/json"
    params = {
        "query": query,
        "key": os.environ.get("GOOGLE_API_KEY")
    }

    response = requests.get(url, params=params)
    return jsonify(response.json())
