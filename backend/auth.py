from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
import sqlite3
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

auth = Blueprint("auth", __name__)


def get_db():
    return sqlite3.connect("database.db", timeout=10)


@auth.route("/login", methods=["POST"])
def login():

    info = request.get_json()
    if not info:
        return jsonify({"success": False, "error": "Invalid request"}), 400

    email = info.get("email", "").lower().strip()
    password = info.get("password", "")

    with get_db() as conn:
        conn.row_factory = sqlite3.Row
        user = conn.execute(
            "SELECT * FROM users WHERE email = ?",
            (email,)
        ).fetchone()

    if not user or not check_password_hash(user["password"], password):
        return jsonify({"success": False, "error": "Invalid credentials"}), 401

    access_token = create_access_token(identity=user["id"])

    return jsonify({
        "success": True,
        "access_token": access_token,
        "user": {
            "id": user["id"],
            "email": user["email"],
            "firstName": user["first_name"]
        }
    }), 200


@auth.route("/logout", methods=["POST"])
def logout():
    return jsonify({
        "success": True,
        "message": "Logged out"
    }), 200


@auth.route("/sign-up", methods=["POST"])
def sign_up():
    info = request.get_json()
    if not info:
        return jsonify({"success": False, "message": "Invalid request"}), 400

    email = info.get("email", "").lower().strip()
    first_name = info.get("firstName", "").strip()
    password1 = info.get("password", "")

    # validations
    if len(email) < 4:
        return jsonify({"success": False, "message": "Email must be greater than 3 characters"}), 400

    if len(first_name) < 2:
        return jsonify({"success": False, "message": "First name must be greater than 1 character"}), 400

    if len(password1) < 7:
        return jsonify({"success": False, "message": "Password must be at least 7 characters"}), 400

    with get_db() as conn:
        conn.row_factory = sqlite3.Row

        # check existing user
        user = conn.execute(
            "SELECT id FROM users WHERE email = ?",
            (email,)
        ).fetchone()

        if user:
            return jsonify({"success": False, "message": "Email already exists"}), 400

        # insert new user
        hashed_password = generate_password_hash(password1)
        conn.execute(
            "INSERT INTO users (email, first_name, password) VALUES (?, ?, ?)",
            (email, first_name, hashed_password)
        )
        conn.commit()

    return jsonify({
        "success": True,
        "message": "Account created"
    }), 201

@auth.route("/me", methods=["GET"])
@jwt_required()
def get_me():
    user_id = get_jwt_identity()

    with get_db() as conn:
        conn.row_factory = sqlite3.Row
        user = conn.execute(
            "SELECT id, email, first_name FROM users WHERE id = ?",
            (user_id,)
        ).fetchone()

    if not user:
        return jsonify({"error": "User not found"}), 404

    return jsonify({
        "id": user["id"],
        "email": user["email"],
        "firstName": user["first_name"],
    }), 200

@auth.route("/resources/click", methods=["POST"])
@jwt_required()
def save_resource_click():
    user_id = get_jwt_identity()
    data = request.get_json()

    topic = data.get("topic")
    title = data.get("title")
    url = data.get("url")

    if not url:
        return jsonify({"error": "Missing url"}), 400

    with sqlite3.connect("database.db", timeout=10) as conn:
        conn.execute(
            """
            INSERT INTO clicked_resources (user_id, topic, title, url)
            VALUES (?, ?, ?, ?)
            """,
            (user_id, topic, title, url)
        )
        conn.commit()

    return jsonify({"success": True}), 201
