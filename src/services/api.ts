const getCoords = (city: string) => {
  switch (city) {
    case "Berlin":
      return { lat: 52.52, lon: 13.41 };
    case "Paris":
      return { lat: 48.85, lon: 2.35 };
    case "London":
      return { lat: 51.51, lon: -0.13 };
    default:
      return { lat: 52.52, lon: 13.41 };
  }
};

export const fetchAirQuality = async (city: string) => {
  const { lat, lon } = getCoords(city);
  const res = await fetch(
    `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&hourly=pm10,pm2_5,carbon_monoxide`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch air quality data");
  }
  return res.json();
};
