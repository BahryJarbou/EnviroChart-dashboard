import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

interface Props {
  lat: number;
  lon: number;
  city: string;
}

const CityMap = ({ lat, lon, city }: Props) => {
  const position: [number, number] = [lat, lon];
  return (
    <MapContainer
      center={position}
      zoom={10}
      scrollWheelZoom={false}
      className="h-75 w-full rounded-xl"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>{city}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default CityMap;
