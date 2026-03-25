import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface WaterChartProps {
  data: { month: string; water: number }[];
}

const WaterChart: React.FC<WaterChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip contentStyle={{ borderRadius: "8px" }} />
        <Area
          type="monotone"
          dataKey="water"
          stroke="#06b6d4"
          fill="#67e8f9"
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default WaterChart;
