import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface EnergyChartProps {
  data: { month: string; energy: number }[];
}

const EnergyChart: React.FC<EnergyChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip contentStyle={{ borderRadius: "8px" }} />
        <Bar dataKey="energy" fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default EnergyChart;
