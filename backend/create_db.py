import sqlite3 as db


conn = db.connect("database.db") #connection between database
conn.execute(''' CREATE TABLE IF NOT EXISTS users
           (id INTEGER PRIMARY KEY AUTOINCREMENT,
           first_name TEXT NOT NULL,
           email TEXT UNIQUE NOT NULL,
           password TEXT NOT NULL);'''
       )

conn.execute("""
    CREATE TABLE IF NOT EXISTS newsletter (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
""")

conn.close()
