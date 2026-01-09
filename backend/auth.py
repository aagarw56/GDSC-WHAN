from flask import Blueprint, render_template, request, flash, redirect, url_for, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
import sqlite3


auth = Blueprint('auth', __name__)


@auth.route('/login', methods = ['POST'])
def login():
   info = request.get_json()


   #get info from database
   conn = sqlite3.connect("database.db")
   conn.row_factory = sqlite3.Row # can use column names
   cursor = conn.cursor()
   cursor.execute(
       "SELECT * FROM users WHERE email = ?",
       (info['email'],)
   )
   user = cursor.fetchone()
   conn.close()


   if user:
       if check_password_hash(user["password"], info['password']):
           return jsonify({"success": True,
                           "message": "logged in"}), 200
       else:
           return jsonify({"success": False,
                           "error": "Incorrect password"}), 401
   else:
       return jsonify({"success": False,
                       "error": "Email does not exist"}), 404


@auth.route('/logout', methods=['POST'])
def logout():
   return jsonify({'success': True, 'message': 'logged out'}), 200


@auth.route('/sign-up', methods = ['POST'])
def sign_up():
   info = request.get_json() #return dictionary
   email = info['email']
   first_name = info['firstName']
   password1 = info['password1']
   password2 = info['password2']
  
   #check user
   conn = sqlite3.connect("database.db")
   conn.row_factory = sqlite3.Row # can use column names
   cursor = conn.cursor()
   cursor.execute(
       "SELECT * FROM users WHERE email = ?",
       (info['email'],)
   )
   user = cursor.fetchone()
   conn.close()


   if user:
       return jsonify({'success': False, 'message': 'Email already exists.'}), 400
   elif len(email) < 4:
       return jsonify({'success': False, 'message': 'Email must be greater than 3 characters'}),400
   elif len(first_name) < 2:
       return jsonify({'success': False, 'message': 'First name must be greater than 1 character'}),400
   elif password1 != password2:
       return jsonify({'success': False, 'message': 'Passwords don\'t match.'}),400
   elif len(password1) < 7:
       return jsonify({'success': False, 'message': 'Password must be at least 7 characters.'}),400
   else:
       #add user to database
       conn = sqlite3.connect("database.db")
       hashed_password = generate_password_hash(password1, method = 'pbkdf2:sha256')
       conn.execute("INSERT INTO users (email, first_name, password) VALUES( ?,?,?)", (email, first_name, hashed_password))
       conn.commit()
       conn.close()
      
   return jsonify({'success': True, 'message': 'account created'}), 201
