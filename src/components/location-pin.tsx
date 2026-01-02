import React from 'react';
import { Marker } from "react-simple-maps";

type Location = {
  location: {
    coordinates: {
      lat: number, lng: number
    },
    city: string;
    state: string;
    country: string;
    desc: string;
    visitedDate: string;
  }
}

function LocationPin(props: Location) {

  return (
    <Marker coordinates={[props.location.coordinates.lng, props.location.coordinates.lat]} 
      style={{ 
        // overflow: 'visible',
        default: { outline: "none" },
        hover: { outline: "none" },
        pressed: { outline: "none" },
      }}>
      <svg className={"my-anchor-element-"+props.location.city} width="16" height="32" viewBox="0 0 64 128" overflow="visible">
          <path fill="#00a9f4" stroke="white" strokeWidth="1"
              d="M0,0 Q1,-8 10,-15 A15,15 0,1,0 -10,-15 Q-1,-8 0,0"/>
      </svg>
    </Marker>
  )
}

export default LocationPin;