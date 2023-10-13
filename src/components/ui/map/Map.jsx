import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import usePosition from '../../../hooks/usePosition';
import React, { useEffect, useRef, useState } from 'react';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import 'leaflet-routing-machine';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import data from './data.json';

const Map = ({ start, end }) => {
  const { position, error } = usePosition();
  const { longitude, latitude, accuracy } = position;
  const mapRef = useRef(null);
  const [routeControl, setRouteControl] = useState(null);
  const currentLocation = [latitude, longitude];

  if (error) {
    return;
  }

  useEffect(() => {
    const osmMark = document.querySelector('.leaflet-control-attribution');

    if (osmMark) {
      osmMark.style = 'display: none';
    }
  }, [longitude]);

  const MAP_KEY =
    'pk.eyJ1IjoiaWdvcnpoaWdhbG92MTgyIiwiYSI6ImNsbmtvM3N6MjBveHMyanAydnczdndwY2EifQ.IOoiPxFto_GPTHWqmpSGHw';

  useEffect(() => {
    if (mapRef.current && !routeControl) {
      const map = mapRef.current.leafletElement;
      const control = L.Routing.control({
        waypoints: [L.latLng(currentLocation), L.latLng(end)],
        router: L.Routing.openRouteService({
          api_key: MAP_KEY,
          profile: 'driving-car',
          timeout: 30 * 1000,
          geometry_simplify: true,
        }),

        showAlternatives: true,
        routeWhileDragging: true,
        geocoder: L.Control.Geocoder.nominatim(),
      }).addTo(map);

      setRouteControl(control);
    }
  }, []);
  mapRef, routeControl, start, end;

  //
  return (
    <>
      {longitude && latitude && (
        <div className="container">
          <MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef}>
            <div ref={mapRef} style={{ height: '100%', width: '100%' }} />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            />
                {
            data?.branch.map(branch => (
              <Marker position={[...branch.coordinates]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            ))
          }
            <Marker position={[latitude, longitude]}>
              <Popup>Current position</Popup>
            </Marker>
            <Marker position={end}>
              <Popup>End</Popup>
            </Marker>
            <Polyline positions={[currentLocation, end]} />
          </MapContainer>
        </div>
      )}
    </>
  );
};

Map.propTypes = {
  start: PropTypes.array,
  end: PropTypes.array,
};

export default Map;
