import React from 'react';
import { Marker } from 'react-map-gl';
import NHdata from '../../assets/json/nh.json';
// import Star from '../../assets/images/star.svg';
import Mic from '../../assets/images/mic.svg';

const Cities = () => {
  const cities = NHdata.features.map((city, index) => {
    return (
      <div key={city.properties.id}>
        <Marker
          latitude={city.geometry.coordinates[1]}
          longitude={city.geometry.coordinates[0]}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <img src={Mic} alt="mic" />
        </Marker>
      </div>
    );
  });

  return <>{cities}</>
}

export default Cities;