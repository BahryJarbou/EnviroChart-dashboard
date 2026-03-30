import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: { time: string; pm2_5: number; pm10: number }[];
}

const AirQualityChart = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="pm2_5" stroke="#f97316" />
        <Line type="monotone" dataKey="pm10" stroke="#ef4444" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AirQualityChart;
