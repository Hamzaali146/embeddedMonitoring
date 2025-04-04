// MetricChart.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

interface MetricChartProps {
  title: string;
  data: { timestamp: string; value: number }[];
  unit: string;
  color: string;
  refValue?: number;
  refLabel?: string;
  dataKey?: string;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getUTCHours()}:${date.getUTCMinutes().toString().padStart(2, '0')}`;
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-airvibe-darkbg p-3 border border-airvibe-graybg rounded-md shadow-lg">
        <p className="text-sm">{`${formatDate(label)}`}</p>
        <p className="text-sm font-bold" style={{ color: payload[0].color }}>
          {`${payload[0].value.toFixed(1)} ${payload[0].payload.unit}`}
        </p>
      </div>
    );
  }
  return null;
};

const MetricChart: React.FC<MetricChartProps> = ({
  title,
  data,
  unit,
  color,
  refValue,
  refLabel,
  dataKey = 'value',
}) => {
  return (
    <Card className="border-none shadow-md bg-airvibe-cardbg">
      <CardHeader>
        <CardTitle className="text-md font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#2A2D36" />
              <XAxis
                dataKey="timestamp"
                tickFormatter={formatDate}
                stroke="#6b7280"
                tick={{ fontSize: 12 }}
                minTickGap={20}
              />
              <YAxis stroke="#6b7280" tick={{ fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              {refValue && refLabel && (
                <ReferenceLine
                  y={refValue}
                  stroke="#FF5959"
                  strokeDasharray="3 3"
                  label={{ value: refLabel, fill: '#FF5959', fontSize: 12 }}
                />
              )}
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, fill: color, stroke: '#0E1015', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricChart;