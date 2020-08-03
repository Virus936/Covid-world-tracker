import React from "react";
import { Map as LeafMap, Marker, Popup, TileLayer } from "react-leaflet";
import "./Map.css";

function Map({ position , countriesInfo}) {
  return (
    <div className="map__container">
      <LeafMap center={position} zoom={4}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </LeafMap>
    </div>
  );
}
export default Map;
