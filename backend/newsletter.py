from flask import Blueprint, request, jsonify, current_app
from flask_mail import Message
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
            (email.lower().strip(),)
        )
        conn.commit()
    except sqlite3.IntegrityError:
        return jsonify({
            "success": False,
            "message": "Email already subscribed"
        }), 409

    msg = Message(
        subject="You're subscribed!",
        recipients=[email],
        body=(
            "Thank you for subscribing to the Women's Health Advancement Network!\n\n"
            "You'll now receive updates, health tips, and resources.\n\n"
            "You can unsubscribe at any time."
        )
    )

    current_app.extensions["mail"].send(msg)

    return jsonify({
        "success": True,
        "message": "Subscribed successfully"
    }), 201
