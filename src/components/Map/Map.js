import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import styles from './Map.module.css';

const Map = () => {
  const [viewport, setViewport] = useState({
    width: '70%',
    height: '80vh',
    latitude: 42.75,
    longitude: -71.43,
    zoom: 7
  });

  return (
    <ReactMapGL
      className={styles.Map}
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}

export default Map;