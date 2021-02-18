import { PropTypes } from "prop-types";
import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import mapIcon from "../../../assets/images/icons/map.png";

const LocationMap = props => {
  const mapStyles = {
    width: "100%",
    height: "100%"
  };

  return (
    <Map
      google={props.google}
      zoom={10}
      style={mapStyles}
      initialCenter={{ lat: props.latitude, lng: props.longitude }}
    >
      <Marker
        position={{ lat: props.latitude, lng: props.longitude }}
        icon={{
          url: `${mapIcon}`
        }}
        animation={props.google.maps.Animation.BOUNCE}
      />
    </Map>
  );
};

LocationMap.propTypes = {
  google: PropTypes.object,
  latitude: PropTypes.string,
  longitude: PropTypes.string
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyB2D8wrWMY3XZnuHO6C31uq90JiuaFzGws"
})(LocationMap);
