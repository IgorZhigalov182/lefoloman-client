import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import usePosition from '../../../hooks/usePosition';

const Map = () => {
  const { position, error } = usePosition();
  const { longitude, latitude } = position;

  if (error) {
    return;
  }

  return (
    longitude && latitude && <div className='container'>
      <MapContainer center={[longitude, latitude]} zoom={15} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[longitude, latitude]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
