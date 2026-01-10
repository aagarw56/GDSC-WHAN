from flask import Flask, request, jsonify
import requests
from flask_cors import CORS
from auth import auth
from flask_mail import Mail
import os
import sqlite3
from flask_jwt_extended import JWTManager
from datetime import timedelta

from newsletter import newsletter
from maps import maps


app = Flask(__name__)
CORS(app)

app.register_blueprint(newsletter, url_prefix="/api")
app.register_blueprint(auth, url_prefix="/api/auth")
app.register_blueprint(maps, url_prefix="/maps")

@app.route('/')
@app.route('/index')
def index():
   return jsonify({'success': True, 'message': 'home page'})

app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 587
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USERNAME"] = os.environ.get("MAIL_USERNAME")
app.config["MAIL_PASSWORD"] = os.environ.get("MAIL_PASSWORD")
app.config["MAIL_DEFAULT_SENDER"] = os.environ.get("MAIL_DEFAULT_SENDER")

app.config['JWT_SECRET_KEY'] = os.environ.get("JWT_SECRET_KEY")
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)

jwt = JWTManager(app)
mail = Mail(app)

if __name__ == "__main__":

   app.run(host="0.0.0.0", port=8000, debug=True)
