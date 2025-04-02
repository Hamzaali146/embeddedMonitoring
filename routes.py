from flask import Blueprint, render_template
from database import fetch_sensor_data

routes = Blueprint('routes', __name__)

@routes.route("/sense" ,methods=["GET"])
def sense():
    sensor_data = fetch_sensor_data()
    return render_template("view.html", data=sensor_data)

@routes.route("/", methods=["GET"])
def index():
    return render_template("index.html")
