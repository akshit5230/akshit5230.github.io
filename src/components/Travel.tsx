import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import '../css/travel.css';
import markerData from '../constants/markers.json';
import LocationPin from "./location-pin";
import { Tooltip } from 'react-tooltip';
import IndiaTopo from '../constants/geo-in.json';
import IndiaGeo from '../constants/india.json';

// const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json";

const indiaUrl = "geo-in.json"

const travelledStates = [
    'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Goa'
]

const MapChart = () => {
  return (
    <div className="TravelMap">
        {/* <div className="TravelMap-title">I like to travel.</div>
        <div className="TravelMap-title-2">🚂🚃🚃🚃🚃🚃🚃🚃🚃🚃💨</div> */}
        <ComposableMap projection="geoMercator" projectionConfig={{
            scale: 900, center: [82,20]
        }}>
            <Geographies geography={IndiaTopo}>
                {({ geographies }) =>
                geographies
                    .map((country) => ( 
                        <Geography key={country.rsmKey} geography={country} 
                        fill={travelledStates.includes(country.properties.name) ? '#DCDCDC': '#FFF'}
                        style={{
                            default: { outline: "none" },
                            hover: { outline: "none" },
                            pressed: { outline: "none" },
                        }}/>
                    )
                )}
            </Geographies>
            {markerData.map(marker => <LocationPin location={marker} key={marker.city}/>)}
        </ComposableMap>
        {markerData.map(marker => <Tooltip key={marker.city} anchorSelect={".my-anchor-element-"+marker.city} 
            place="top" className="tooltip-white" classNameArrow="tooltip-arrow-white">
            <div className="Tooltip-title">{marker.city}</div>
            <div className="Tooltip-desc">{marker.desc}</div>
        </Tooltip>)}
    </div>
  );
};

export default MapChart;