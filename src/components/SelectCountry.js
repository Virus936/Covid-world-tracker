import React from 'react';

function SelectCountry({country, countries,onChangeCountry  }) {
  return (
    <select value = {country} onChange={onChangeCountry}>
      <option value="worldwide">Worldwide</option>
      {
        countries.map( country => (
          <option key={country.name} value={ country.value }>{country.name}</option>
        ))
      }
    </select>
  );
}


export default SelectCountry;
