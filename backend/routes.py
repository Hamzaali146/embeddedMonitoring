from flask import Blueprint, render_template,jsonify, request, jsonify, send_from_directory
from database import fetch_sensor_data
import os
import subprocess
import requests
routes = Blueprint('routes', __name__)


UPLOAD_FOLDER = 'uploads'
BIN_FOLDER = 'bin'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(BIN_FOLDER, exist_ok=True)

esp_ip = None

@routes.route('/espip', methods=['POST'])
def espip():
    global esp_ip
    data = request.get_json()
    esp_ip = data.get('ip')
    print(f"[ESP REGISTERED] IP: {esp_ip}")
    return jsonify({"message": "ESP IP Registered", "ip": esp_ip})

@routes.route('/upload_script', methods=['POST'])
def upload_script():
    code = request.json.get('script')
    filename = "sketch.ino"

    sketch_path = os.path.join(UPLOAD_FOLDER, filename)
    with open(sketch_path, 'w') as f:
        f.write(code)

    compile_cmd = [
        'arduino-cli', 'compile',
        '--fqbn', 'esp32:esp32:esp32',
        UPLOAD_FOLDER
    ]

    try:
        subprocess.run(compile_cmd, check=True)
        print("[COMPILE SUCCESS]")

        # Move compiled binary
        compiled_path = os.path.join(UPLOAD_FOLDER, 'build/esp32.esp32.esp32/sketch.ino.bin')
        final_bin_path = os.path.join(BIN_FOLDER, 'firmware.bin')
        os.replace(compiled_path, final_bin_path)
        print("[BIN READY] firmware.bin generated")

        # Optionally: Upload to hostinger (techyaim.com)
        # upload_to_hosting(final_bin_path)

        # Trigger OTA if IP is registered
        if esp_ip:
            ota_url = f"http://{esp_ip}/update"
            try:
                response = requests.get(ota_url, timeout=10)
                return jsonify({"message": "OTA update triggered", "device_response": response.text})
            except requests.exceptions.RequestException as e:
                return jsonify({"message": "Compilation OK but OTA trigger failed", "error": str(e)}), 202
        else:
            return jsonify({"message": "Compiled successfully, but ESP is not registered yet."}), 202

    except subprocess.CalledProcessError:
        return jsonify({"error": "Compilation failed"}), 500

@routes.route('/bin/<filename>')
def serve_firmware(filename):
    return send_from_directory(BIN_FOLDER, filename)

# Optional: FTP upload to Hostinger (uncomment if needed)
"""
import ftplib

def upload_to_hosting(filepath):
    session = ftplib.FTP('ftp.techyaim.com', 'your_username', 'your_password')
    with open(filepath, 'rb') as f:
        session.storbinary('STOR firmware.bin', f)
    session.quit()
    print("[UPLOAD COMPLETE] firmware.bin uploaded to Hostinger")
"""

@routes.route("/sense" ,methods=["GET"])
def sense():
    sensor_data = fetch_sensor_data()
    return render_template("view.html", data=sensor_data)

@routes.route("/", methods=["GET"])
def index():
    return render_template("index.html")

@routes.route("/api/data",methods=["GET", "POST"])
def airvibe():
    data=fetch_sensor_data()
    print(data)
    return jsonify(data)


