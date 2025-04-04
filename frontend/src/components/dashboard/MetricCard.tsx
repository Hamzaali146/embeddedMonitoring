
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: number;
  unit: string;
  icon: React.ReactNode;
  status?: 'good' | 'medium' | 'bad';
  subtitle?: string;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  unit, 
  icon, 
  status = 'good',
  subtitle,
  className
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'good':
        return 'metric-good';
      case 'medium':
        return 'metric-medium';
      case 'bad':
        return 'metric-bad';
      default:
        return 'text-white';
    }
  };

  return (
    <Card className={cn("border-none shadow-md bg-airvibe-cardbg", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className="h-8 w-8 rounded-full bg-airvibe-graybg flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline space-x-2">
          <div className={cn("data-value", getStatusColor())}>{value}</div>
          <div className="text-sm text-muted-foreground">{unit}</div>
        </div>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default MetricCard;
