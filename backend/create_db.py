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

#google maps marker
conn.execute('''
             CREATE TABLE IF NOT EXISTS markers (
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             user_id INTEGER NOT NULL,
             latitude REAL NOT NULL,
             longitude REAL NOT NULL,
             description TEXT,
             created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
             FOREIGN KEY (user_id) REFERENCES users(id)
             );
             ''')
conn.commit()
conn.close()

