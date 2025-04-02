import pymysql

def get_db_connection():
    return pymysql.connect(
        host="194.163.46.2",
        port=3306,
        user="u481156254_mbsd",
        password="|5gP2?A#l7",
        database="u481156254_quality",
        cursorclass=pymysql.cursors.DictCursor  # ✅ Use DictCursor here
    )

def fetch_sensor_data():
    conn = get_db_connection()
    cursor = conn.cursor()  # ❌ Remove `dictionary=True`
    
    cursor.execute("SELECT * FROM sensor_data")  # Change to your actual table
    data = cursor.fetchall()
    
    conn.close()
    return data
