from flask import Flask, request, jsonify
import requests
from flask_cors import CORS
from auth import auth

from newsletter import newsletter
from google_api import google_api


app = Flask(__name__)
CORS(app)

app.register_blueprint(newsletter, url_prefix="/api")
app.register_blueprint(auth, url_prefix="/auth")
app.register_blueprint(google_api, url_prefix="/api")

@app.route('/')
@app.route('/index')
def index():
   return jsonify({'success': True, 'message': 'home page'})


if __name__ == "__main__":
   app.run(host="0.0.0.0", port=8000)

