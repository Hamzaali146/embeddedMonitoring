
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RoomData } from '@/services/airQualityService';
import { cn } from '@/lib/utils';

interface RoomCardProps {
  room: RoomData;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  const getStatusColor = (status: RoomData['status']) => {
    switch (status) {
      case 'Good':
        return 'bg-airvibe-green';
      case 'Moderate':
        return 'bg-airvibe-yellow';
      case 'Unhealthy':
      case 'Very Unhealthy':
        return 'bg-airvibe-red';
      case 'Hazardous':
        return 'bg-airvibe-purple';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusTextColor = (status: RoomData['status']) => {
    switch (status) {
      case 'Good':
        return 'text-airvibe-green';
      case 'Moderate':
        return 'text-airvibe-yellow';
      case 'Unhealthy':
      case 'Very Unhealthy':
        return 'text-airvibe-red';
      case 'Hazardous':
        return 'text-airvibe-purple';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <Card className="border-none shadow-md bg-airvibe-cardbg">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-md font-medium">{room.name}</CardTitle>
          <div className="text-xs text-muted-foreground">{room.devices} devices</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col space-y-1">
            <span className="text-xs text-muted-foreground">Temperature</span>
            <span className="font-bold">{room.temperature}°C</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-xs text-muted-foreground">Humidity</span>
            <span className="font-bold">{room.humidity}%</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-xs text-muted-foreground">CO₂</span>
            <span className="font-bold">{room.co2} ppm</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-xs text-muted-foreground">PM2.5</span>
            <span className="font-bold">{room.pm25} μg/m³</span>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Status</span>
            <span className={cn("text-sm font-medium", getStatusTextColor(room.status))}>
              {room.status}
            </span>
          </div>
          <div className="w-full h-2 bg-airvibe-graybg rounded-full mt-2 overflow-hidden">
            <div 
              className={cn("h-full rounded-full", getStatusColor(room.status))}
              style={{ width: `${Math.min(100, room.pm25 * 3)}%` }}
            ></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
