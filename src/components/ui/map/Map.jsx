// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import usePosition from '../../../hooks/usePosition';

const Map = () => {
  const { position, error } = usePosition();

  return (
    <div>
      {!position.latitude ? <h1>Loading...</h1> : <h1>Actual position:</h1>}
      <h3>longitude : {position.longitude}</h3>
      <h3>latitude : {position.latitude}</h3>
      <h3>accuracy : {position.accuracy}</h3>
    </div>
    // <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
    //   <TileLayer
    //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //   />
    //   <Marker position={[51.505, -0.09]}>
    //     <Popup>
    //       A pretty CSS3 popup. <br /> Easily customizable.
    //     </Popup>
    //   </Marker>
    // </MapContainer>
  );
};

export default Map;
