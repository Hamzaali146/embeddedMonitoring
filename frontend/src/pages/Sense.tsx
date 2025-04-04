// sense.tsx
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import MetricCard from '@/components/dashboard/MetricCard';
import MetricChart from '@/components/dashboard/MetricChart';
import RoomCard from '@/components/dashboard/RoomCard';
import { Thermometer, Droplets, ArrowUp, ArrowDown } from 'lucide-react';
import { getRoomsData, getCurrentReadings, getOutdoorReadings, RoomData } from '@/services/airQualityService';

interface SensorData {
  id: number;
  temp_c: number;
  temp_f: number;
  humidity: number;
  timestamp: string;
}

const Sense = () => {
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d'>('24h');
  const [sensorData, setSensorData] = useState<SensorData[]>([]);
  const [temperatureData, setTemperatureData] = useState<{ timestamp: string; value: number }[]>([]);
  const [humidityData, setHumidityData] = useState<{ timestamp: string; value: number }[]>([]);
  const [currentReadings, setCurrentReadings] = useState(getCurrentReadings());
  const [outdoorReadings, setOutdoorReadings] = useState(getOutdoorReadings());
  const [rooms, setRooms] = useState<RoomData[]>(getRoomsData());

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/data");
      const data: SensorData[] = await response.json();

      const sortedData = data.sort((a, b) => 
        new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
      );

      setSensorData(sortedData);

      if (sortedData.length > 0) {
        const latest = sortedData[sortedData.length - 1];
        setCurrentReadings({
          temperature: latest.temp_c,
          humidity: latest.humidity,
        });
      }
    } catch (error) {
      console.error("Error fetching sensor data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000); // Refresh every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sensorData.length > 0) {
      // Temporary: Show all data regardless of timestamp for testing
      const tempSeries = sensorData.map(item => ({
        timestamp: item.timestamp,
        value: item.temp_c,
      }));

      const humSeries = sensorData.map(item => ({
        timestamp: item.timestamp,
        value: item.humidity,
      }));

      setTemperatureData(tempSeries);
      setHumidityData(humSeries);
    }
  }, [timeRange, sensorData]);

  const getTemperatureStatus = (temp: number) => {
    if (temp < 18 || temp > 28) return 'bad';
    if (temp < 20 || temp > 26) return 'medium';
    return 'good';
  };

  const getHumidityStatus = (humidity: number) => {
    if (humidity < 30 || humidity > 70) return 'bad';
    if (humidity < 40 || humidity > 60) return 'medium';
    return 'good';
  };

  return (
    <div className="container mx-auto animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Air Quality Dashboard</h1>
          <p className="text-muted-foreground">Monitor your environment's air quality metrics in real-time</p>
        </div>
        <Select value={timeRange} onValueChange={(value) => setTimeRange(value as any)}>
          <SelectTrigger className="w-[180px] bg-airvibe-cardbg border-airvibe-graybg mt-4 md:mt-0">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent className="bg-airvibe-cardbg border-airvibe-graybg">
            <SelectItem value="24h">Last 24 Hours</SelectItem>
            <SelectItem value="7d">Last 7 Days</SelectItem>
            <SelectItem value="30d">Last 30 Days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <MetricCard
          title="Temperature"
          value={currentReadings.temperature}
          unit="°C"
          icon={<Thermometer className="h-5 w-5 text-white" />}
          status={getTemperatureStatus(currentReadings.temperature)}
          subtitle="Indoor Average"
        />
        <MetricCard
          title="Humidity"
          value={currentReadings.humidity}
          unit="%"
          icon={<Droplets className="h-5 w-5 text-white" />}
          status={getHumidityStatus(currentReadings.humidity)}
          subtitle="Indoor Average"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="border-none shadow-md bg-airvibe-cardbg">
          <CardHeader className="pb-2">
            <CardTitle className="text-md font-medium">Indoor vs Outdoor Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <ComparisonCard
                metric="Temperature"
                indoor={currentReadings.temperature}
                outdoor={outdoorReadings.temperature}
                unit="°C"
                icon={<Thermometer className="h-5 w-5 text-white" />}
              />
              <ComparisonCard
                metric="Humidity"
                indoor={currentReadings.humidity}
                outdoor={outdoorReadings.humidity}
                unit="%"
                icon={<Droplets className="h-5 w-5 text-white" />}
              />
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="temperature">
          <TabsList className="grid grid-cols-2 bg-airvibe-graybg">
            <TabsTrigger value="temperature">Temperature</TabsTrigger>
            <TabsTrigger value="humidity">Humidity</TabsTrigger>
          </TabsList>
          <TabsContent value="temperature">
            <MetricChart
              title="Temperature History"
              data={temperatureData}
              unit="°C"
              color="#4BDC6D"
              refValue={28}
              refLabel="Max Comfort"
            />
          </TabsContent>
          <TabsContent value="humidity">
            <MetricChart
              title="Humidity History"
              data={humidityData}
              unit="%"
              color="#47A3FF"
              refValue={60}
              refLabel="Max Comfort"
            />
          </TabsContent>
        </Tabs>
      </div>

      <h2 className="text-2xl font-bold mb-6">Room Monitoring</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

interface ComparisonCardProps {
  metric: string;
  indoor: number;
  outdoor: number;
  unit: string;
  icon: React.ReactNode;
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({
  metric,
  indoor,
  outdoor,
  unit,
  icon,
}) => {
  const diff = indoor - outdoor;
  const isPositive = diff > 0;

  return (
    <div className="bg-airvibe-graybg rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm text-muted-foreground">{metric}</div>
        <div className="bg-airvibe-darkbg p-1.5 rounded-full">{icon}</div>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div>
          <div className="text-xs text-muted-foreground">Indoor</div>
          <div className="text-xl font-bold">{indoor.toFixed(1)} {unit}</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground">Outdoor</div>
          <div className="text-xl font-bold">{outdoor.toFixed(1)} {unit}</div>
        </div>
      </div>
      <div className="flex items-center mt-2">
        <div className={`text-sm font-medium ${isPositive ? 'text-airvibe-red' : 'text-airvibe-green'}`}>
          {isPositive ? <ArrowUp className="h-4 w-4 inline mr-1" /> : <ArrowDown className="h-4 w-4 inline mr-1" />}
          {Math.abs(diff).toFixed(1)} {unit} {isPositive ? 'higher' : 'lower'}
        </div>
      </div>
    </div>
  );
};

export default Sense;