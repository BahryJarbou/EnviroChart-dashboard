import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Co2ChartProps {
  data: { month: string; co2: number }[];
}

const Co2Chart: React.FC<Co2ChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip contentStyle={{ borderRadius: "8px" }} />
        <Line type="monotone" dataKey="co2" stroke="#22c55e" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Co2Chart;
