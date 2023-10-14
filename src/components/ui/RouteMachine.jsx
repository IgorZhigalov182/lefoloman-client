import L from 'leaflet';
import { createControlComponent } from '@react-leaflet/core';
import 'leaflet-routing-machine';

// const createRouteMachineLayer = ({ startLat, startLong, endLat, endLong }) => {
//   console.log(endLat, endLong);

//   const instance = L.Routing.control({
//     waypoints: [L.latLng(startLat, startLong), L.latLng(endLat, endLong)],
//     lineOptions: {
//       styles: [{ color: '#6FA1EC', weight: 4 }],
//     },
//     show: false,
//     addWaypoints: false,
//     routeWhileDragging: false,
//     draggableWaypoints: true,
//     fitSelectedRoutes: true,
//     showAlternatives: false,
//   });

//   return instance;
// };

const Machine = ({ startLat, startLong, endLat, endLong }) => {
  const instance = L.Routing.control({
    waypoints: [L.latLng(startLat, startLong), L.latLng(endLat, endLong)],
    lineOptions: {
      styles: [{ color: '#6FA1EC', weight: 4 }],
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: false,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });

  return instance;
};

const RouteMachine = createControlComponent(Machine);

export default RouteMachine;
