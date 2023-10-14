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
import { useSelector } from 'react-redux';

const Map = ({ coordinates }) => {
  const { position, error } = usePosition();
  const { latitude, longitude, accuracy } = position;
  const mapRef = useRef(null);
  const rMachine = useRef();

  if (error) {
    return;
  }

  const coords = useSelector((store) => store.state.direction);

  useEffect(() => {
    if (rMachine.current) {
      rMachine.current.setWaypoints([
        L.latLng(latitude, longitude),
        L.latLng(coords.lat, coords.lon),
      ]);
    }
  }, [coords, rMachine]);

  setTimeout(() => {
    function getElements(selector) {
      return Array.from(document.querySelectorAll(selector));
    }

    const elements = getElements('.leaflet-marker-icon');

    elements.forEach((element) => {
      element.src = '../../../public/location.png';
      element.style.width = '40px';
    });
  }, 500);

  return (
    <>
      {longitude && latitude && (
        <div className="container">
          <MapContainer center={[latitude, longitude]} zoom={15} ref={mapRef} zoomControl={false}>
            <TileLayer
              // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}.png"
              // attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            />
            <RouteMachine
              ref={rMachine}
              startLat={latitude}
              startLong={longitude}
              endLat={coordinates?.latitude}
              endLong={coordinates?.longitude}
            />
            {data?.branch.map((branch) => (
              <Marker icon={myIcon} key={branch.name} position={[...branch.coordinates]}></Marker>
            ))}
            <ChildMap />
          </MapContainer>
        </div>
      )}
    </>
  );
};

export default Map;
