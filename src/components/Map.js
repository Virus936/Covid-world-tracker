import React from "react";
import { Map as LeafMap, Circle, Popup, TileLayer } from "react-leaflet";
import "./Map.css";
import { casesTypeproperty } from "./utils/utils"


function Map({ countries, country, covidcase }) {

  const position = country.countryInfo
    ? [country.countryInfo.lat, country.countryInfo.long]
    : [0, 0];

  const zoom = country.countryInfo ? 3 : 1

  return (
    <div className="map__container">
      <LeafMap center={position} zoom={zoom}>
        {countries.map(country => (
          <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            color={casesTypeproperty[covidcase].color}
            radius={Math.sqrt( country[covidcase] )*casesTypeproperty[covidcase].multiplier}
          >
            <Popup>
              <h1>{country.country}</h1>
            </Popup>
          </Circle>
        ))}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </LeafMap>
    </div>
  );
}
export default Map;
