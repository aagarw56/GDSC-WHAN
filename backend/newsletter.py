from flask import Blueprint, request, jsonify
import sqlite3

newsletter = Blueprint("newsletter", __name__)

@newsletter.route("/newsletter", methods=["POST"])
def subscribe():
    data = request.get_json()
    email = data.get("email")

    if not email:
        return jsonify({"success": False, "message": "Email required"}), 400

    try:
        conn = sqlite3.connect("database.db")
        conn.execute(
            "INSERT INTO newsletter (email) VALUES (?)",
            (email,)
        )
        conn.commit()
        conn.close()
    except sqlite3.IntegrityError:
        return jsonify({
            "success": False,
            "message": "Email already subscribed"
        }), 409

    return jsonify({
        "success": True,
        "message": "Subscribed successfully"
    }), 201
