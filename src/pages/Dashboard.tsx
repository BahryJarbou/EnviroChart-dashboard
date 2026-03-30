import AirQualityCard from "../components/charts/AirQualityCard";
import Co2Chart from "../components/charts/Co2Chart";
import EnergyChart from "../components/charts/EnergyChart";
import WaterChart from "../components/charts/WaterChart";
import Card from "../components/ui/Card";
import { monthlyData } from "../data/mockdata";
import { useState } from "react";

const Dashboard = () => {
  const [months, setMonths] = useState(6);
  const filteredData = monthlyData.slice(-months);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Overview</h2>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setMonths(3)}
          className={`px-3 py-1 ${months === 3 ? "bg-green-500 text-white" : "bg-white"} rounded shadow hover:bg-gray-100`}
        >
          3m
        </button>
        <button
          onClick={() => setMonths(6)}
          className={`px-3 py-1 ${months === 6 ? "bg-green-500 text-white" : "bg-white"} rounded shadow hover:bg-gray-100`}
        >
          6m
        </button>
        <button
          onClick={() => setMonths(12)}
          className={`px-3 py-1 ${months === 12 ? "bg-green-500 text-white" : "bg-white"} rounded shadow hover:bg-gray-100`}
        >
          12m
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500 text-sm">Total CO₂</p>
          <h3 className="text-xl font-bold">275</h3>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500 text-sm">Energy Usage</p>
          <h3 className="text-xl font-bold">1,450 kWh</h3>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500 text-sm">Water Consumption</p>
          <h3 className="text-xl font-bold">3,120 L</h3>
        </div>
      </div>

      <Card title="CO₂ Emissions">
        <Co2Chart data={filteredData} />
      </Card>

      <Card title="Energy Usage">
        <EnergyChart data={filteredData} />
      </Card>

      <Card title="Water Consumption">
        <WaterChart data={filteredData} />
      </Card>
      <Card title="Air Quality (24h Live)">
        <AirQualityCard />
      </Card>
    </div>
  );
};

export default Dashboard;
