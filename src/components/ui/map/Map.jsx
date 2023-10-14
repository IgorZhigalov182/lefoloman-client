import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import usePosition from '../../../hooks/usePosition';
import React, { useEffect, useRef } from 'react';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import data from './data.json';
import { myIcon } from '../Icon';
import RouteMachine from '../RouteMachine';
import './Map.scss';
import ChildMap from './ChildMap';

const Map = () => {
  const { position, error } = usePosition();
  const { latitude, longitude, accuracy } = position;
  const mapRef = useRef(null);

  if (error) {
    return;
  }

  useEffect(() => {
    function getElements(selector) {
      return Array.from(document.querySelectorAll(selector));
    }

    const dynamicSelector = '.leaflet-marker-draggable';

    const elements = getElements(dynamicSelector);

    elements.forEach((element) => {
      console.log(element);
      element.src = '../../../public/location.png';
      element.style.width = '40px';
    });
  }, [latitude]);

  // const a = new Date()
  // a.getTime()

  return (
    <>
      {longitude && latitude && (
        <div className="container">
          <MapContainer center={[latitude, longitude]} zoom={10} ref={mapRef} zoomControl={false}>
            <TileLayer
              // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}.png"
              // attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            />
            <RouteMachine
              startLat={latitude}
              startLong={longitude}
              endLat={60.016993282293896}
              endLong={30.246159601442688}
            />
            {data?.branch.map((branch) => (
              <Marker icon={myIcon} key={branch.name} position={[...branch.coordinates]}>
                <Popup>
                  {branch.name}
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos omnis qui, odio
                  blanditiis officiis deleniti. Iste magni laboriosam debitis facere? Impedit
                  doloremque omnis explicabo, veniam dolorum vel maiores necessitatibus!
                </Popup>
              </Marker>
            ))}
            <ChildMap />
          </MapContainer>
        </div>
      )}
    </>
  );
};

export default Map;
