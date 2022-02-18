import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, { FlyToInterpolator, LinearInterpolator, WebMercatorViewport } from 'react-map-gl';
import { easeCubic } from 'd3-ease';
import FlyTo from '../FlyTo/FlyTo';
import styles from './Map.module.scss';

const Map = () => {
  const [viewport, setViewport] = useState({
    width: '70%',
    height: '80vh',
    latitude: 42.75,
    longitude: -71.43,
    zoom: 7
  });

  const goToChicago = () => {
    setViewport({
      ...viewport,
      longitude: -87.6298,
      latitude: 41.8781,
      zoom: 14,
      transitionDuration: 4000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: easeCubic
    });
  };

  const goToBoston = () => {
    setViewport({
      ...viewport,
      longitude: -71.0589,
      latitude: 42.3601,
      zoom: 14,
      transitionDuration: 4000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: easeCubic
    });
  };

  const goToNYC = () => {
    setViewport({
      ...viewport,
      longitude: -74.1,
      latitude: 40.7,
      zoom: 14,
      transitionDuration: 4000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: easeCubic
    });
  };

  const goToSF = () => {
    const { longitude, latitude, zoom } = new WebMercatorViewport(viewport)
      .fitBounds([[-122.4, 37.7], [-122.5, 37.8]], {
        padding: 20,
        offset: [0, -100]
      });
    setViewport({
      ...viewport,
      longitude,
      latitude,
      zoom,
      transitionDuration: 4000,
      // transitionInterpolator: new FlyToInterpolator(),
      transitionInterpolator: new LinearInterpolator(),
      transitionEasing: easeCubic
    });
  };

  const goToAtlanta = () => {
    return (<FlyTo
      setViewport={
        setViewport({
          viewport: viewport,
          longitude: -84.3880,
          latitude: 33.7490,
          zoom: 14,
          transitionDuration: 4000,
          transitionInterpolator: new FlyToInterpolator(),
          transitionEasing: easeCubic
        })}
    />)
  }

  return (
    <div>
      <button className={styles.FlyButton} onClick={goToChicago}>Chicago</button>
      <button className={styles.FlyButton} onClick={goToBoston}>Boston</button>
      <button className={styles.FlyButton} onClick={goToNYC}>New York City</button>
      <button className={styles.FlyButton} onClick={goToSF}>San Francisco</button>
      <button className={styles.FlyButton} onClick={goToAtlanta}>Atlanta</button>
      <ReactMapGL
        className={styles.Map}
        {...viewport}
        onViewportChange={setViewport}
      />
    </div>
  );
}

export default Map;
