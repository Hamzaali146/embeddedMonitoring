
// Mock data service for air quality metrics

export interface ReadingData {
  timestamp: string;
  value: number;
}

export interface RoomData {
  id: number;
  name: string;
  temperature: number;
  humidity: number;
  co2: number;
  pm25: number;
  devices: number;
  status: 'Good' | 'Moderate' | 'Unhealthy' | 'Hazardous' | 'Very Unhealthy';
}

// Generate random reading between min and max
const getRandomReading = (min: number, max: number): number => {
  return +(Math.random() * (max - min) + min).toFixed(1);
};

// Generate time series data for charts
export const generateTimeSeriesData = (hours: number = 24, metric: 'temperature' | 'humidity' | 'co2' | 'pm25'): ReadingData[] => {
  const data: ReadingData[] = [];
  const now = new Date();
  let ranges: { min: number; max: number };
  
  switch (metric) {
    case 'temperature':
      ranges = { min: 18, max: 28 };
      break;
    case 'humidity':
      ranges = { min: 30, max: 70 };
      break;
    case 'co2':
      ranges = { min: 400, max: 1500 };
      break;
    case 'pm25':
      ranges = { min: 5, max: 30 };
      break;
  }
  
  for (let i = hours; i >= 0; i--) {
    const timestamp = new Date(now.getTime() - i * 60 * 60 * 1000).toISOString();
    data.push({
      timestamp,
      value: getRandomReading(ranges.min, ranges.max)
    });
  }
  
  return data;
};

// Get room status based on metrics
const getRoomStatus = (temp: number, humidity: number, co2: number, pm25: number): RoomData['status'] => {
  if (pm25 > 25 || co2 > 1200 || temp > 30 || humidity > 70) {
    return 'Hazardous';
  } else if (pm25 > 20 || co2 > 1000 || temp > 28 || humidity > 65) {
    return 'Unhealthy';
  } else if (pm25 > 15 || co2 > 800 || temp > 26 || humidity > 60) {
    return 'Moderate';
  } else if (pm25 > 10 || co2 > 600) {
    return 'Very Unhealthy';
  } else {
    return 'Good';
  }
};

// Get rooms data
export const getRoomsData = (): RoomData[] => {
  const rooms: RoomData[] = [];
  
  for (let i = 1; i <= 6; i++) {
    const temperature = getRandomReading(18, 30);
    const humidity = getRandomReading(30, 75);
    const co2 = getRandomReading(400, 1500);
    const pm25 = getRandomReading(5, 35);
    
    rooms.push({
      id: i,
      name: `Room ${i}`,
      temperature,
      humidity,
      co2,
      pm25,
      devices: 16,
      status: getRoomStatus(temperature, humidity, co2, pm25)
    });
  }
  
  return rooms;
};

// Get current average readings
export const getCurrentReadings = () => {
  return {
    temperature: getRandomReading(21, 25),
    humidity: getRandomReading(40, 60),
    co2: getRandomReading(500, 800),
    pm25: getRandomReading(8, 12)
  };
};

// Get outdoor readings (generally worse than indoor)
export const getOutdoorReadings = () => {
  return {
    temperature: getRandomReading(15, 32),
    humidity: getRandomReading(35, 70),
    co2: getRandomReading(390, 450),
    pm25: getRandomReading(15, 40)
  };
};
