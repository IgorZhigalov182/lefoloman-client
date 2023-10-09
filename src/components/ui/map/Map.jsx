import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import usePosition from '../../../hooks/usePosition';
import { useEffect } from 'react';

const Map = () => {
  const { position, error } = usePosition();
  const { longitude, latitude, accuracy } = position;

  if (error) {
    return;
  }

  useEffect(() => {
    const osmMark = document.querySelector('.leaflet-control-attribution');

    if (osmMark) {
      osmMark.style = 'display: none';
    }
  }, [longitude]);

  return (
    longitude &&
    latitude && (
      <div className="container">
        <MapContainer center={[latitude, longitude]} zoom={15} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitude, longitude]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    )
  );
};

export default Map;
