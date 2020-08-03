import React from "react";
import "./StatByCountry.css";
import sortedData from "./utils/utils"

function StatByCountry({ countriesInfo }) {
  return (
    <div className="statbycountry">
      <h1>Nombre de cas par pays</h1>
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>Pays</th>
              <th>Nombre de mort</th>
            </tr>
          </thead>

          <tbody>
            {countriesInfo
                .sort(sortedData)
                .map(country => ( <tr>
                  <td>{country.country}</td>
                  <td>{country.deaths.toLocaleString()}</td>
                </tr>
                ))}
          </tbody>
        </table>


      </div>
    </div>
  );
}

export default StatByCountry;
