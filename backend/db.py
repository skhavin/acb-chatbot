import sqlite3
from pathlib import Path

DB_PATH = Path(__file__).parent / "acb_complaints.db"

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS complaints (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            complainant_name TEXT NOT NULL,
            complainant_email TEXT,
            complainant_phone TEXT,
            complainant_aadhar TEXT,
            complaint_details TEXT NOT NULL,
            additional_details TEXT,
            complaint_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            status TEXT DEFAULT 'Registered'
        )
    ''')
    
    # Add columns if they don't exist
    try:
        cursor.execute('ALTER TABLE complaints ADD COLUMN complainant_aadhar TEXT')
        conn.commit()
    except sqlite3.OperationalError:
        pass  # Column already exists
    
    try:
        cursor.execute('ALTER TABLE complaints ADD COLUMN additional_details TEXT')
        conn.commit()
    except sqlite3.OperationalError:
        pass  # Column already exists
    
    conn.commit()
    conn.close()

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    try:
        yield conn
    finally:
        conn.close()

if __name__ == "__main__":
    init_db()
    print("Database initialized successfully!")

