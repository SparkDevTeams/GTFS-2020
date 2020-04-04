import React from 'react';
import { TiLocationArrow } from 'react-icons/ti';
import { LocationButton, StyledLocationIcon } from './styles';

const Location = (props) => {
  const handleGeoLocation = () => {
    if (!navigator.geolocation) {
      console.log("No Geolocation")
    } else {
      navigator.geolocation.getCurrentPosition(handleGeoLocationSuccess, handleGeoLocationError);
    }
  }

  const handleGeoLocationSuccess = (positions) => {
    console.log(positions);
    const {latitude, longitude, accuracy} = positions.coords;
    props.setCurrentLocation({position: [latitude, longitude], accuracy: accuracy});
  }

  const handleGeoLocationError = (err) => {
    console.log(err)
  }

  return (
    <LocationButton onClick={handleGeoLocation}><StyledLocationIcon as={TiLocationArrow}/></LocationButton>
  )
};

export default Location;