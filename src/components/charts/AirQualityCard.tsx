import { useEffect, useState } from "react";
import { fetchAirQuality } from "../../services/api";
import AirQualityChart from "./AirQualityChart";
import CityMap from "../map/CityMap";
import { getCoords } from "../../services/api";

const AirQualityCard = () => {
  const [city, setCity] = useState("Berlin");
  const [chartData, setChartData] = useState<any[]>([]);
  const { lat, lon } = getCoords(city);

  useEffect(() => {
    fetchAirQuality(city).then((response) => {
      const data = response.hourly.time.map((t: string, i: number) => ({
        time: t.split("T")[1],
        pm2_5: response.hourly.pm2_5[i],
        pm10: response.hourly.pm10[i],
      }));

      // take the last 24 hours
      setChartData(data.slice(-24));
    });
  }, [city]);

  return (
    <div className="flex flex-col gap-4">
      <div className="mb-3">
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 rounded bg-gray-100 dark:bg-gray-700"
        >
          <option>Berlin</option>
          <option>Paris</option>
          <option>London</option>
        </select>
      </div>

      <AirQualityChart data={chartData} />
      <CityMap lat={lat} lon={lon} city={city} />
    </div>
  );
};

export default AirQualityCard;
