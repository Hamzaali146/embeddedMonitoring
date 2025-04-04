import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const EnvironmentalChart = () => {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    const fetchSensorData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/data");
        const data = await response.json();
        setSensorData(data);
      } catch (error) {
        console.error("Failed to fetch sensor data:", error);
      }
    };

    fetchSensorData();
  }, []);

  // Get the latest reading from the sensor data
  const latestReading = sensorData.length > 0 ? sensorData[sensorData.length - 1] : {};

  return (
    <div className="p-6 bg-white rounded-2xl shadow-xl w-full max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-orange-600">
        Environment Monitor Dashboard
      </h2>

      {/* Cards showing latest readings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="bg-orange-100 p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-orange-700">Temperature (°C)</h3>
          <p className="text-4xl font-bold text-orange-800">
            {latestReading.temp_c !== undefined ? latestReading.temp_c.toFixed(2) : "--"}
          </p>
        </div>

        <div className="bg-blue-100 p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-blue-700">Humidity (%)</h3>
          <p className="text-4xl font-bold text-blue-800">
            {latestReading.humidity !== undefined ? latestReading.humidity.toFixed(2) : "--"}
          </p>
        </div>
      </div>

      {/* Line Chart */}
      <div className="bg-gray-100 p-6 rounded-xl shadow">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={sensorData}>
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <XAxis
              dataKey="timestamp"
              tickFormatter={(tick) => new Date(tick).toLocaleTimeString()}
              tick={{ fontSize: 12 }}
            />
            <YAxis />
            <Tooltip
              labelFormatter={(label) =>
                `Time: ${new Date(label).toLocaleString()}`
              }
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="temp_c"
              stroke="#f97316"
              name="Temperature (°C)"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="humidity"
              stroke="#3b82f6"
              name="Humidity (%)"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EnvironmentalChart;
