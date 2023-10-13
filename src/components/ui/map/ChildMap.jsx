import React from 'react';
import { useMap } from 'react-leaflet';

const ChildMap = () => {
  const map = useMap();
  console.log('map center:', map.getCenter());
  return null;
};

export default ChildMap;
