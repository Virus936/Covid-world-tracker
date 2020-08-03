import React from "react";
import "./StatByCountry.css";

function StatByCountry({ countriesInfo }) {

  return (
    <div className="statbycountry">
      <h1>Nombre de cas par pays</h1>
      <table>
        <thead>
          <tr>
            <th>Pays</th>
            <th>Nombre de mort</th>
          </tr>
        </thead>

        <tbody>
          {countriesInfo
              .map(country => ( <tr>
            <td>{country.country}</td>
            <td>{country.deaths}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StatByCountry;
