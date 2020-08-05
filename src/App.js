import React, { useState, useEffect } from "react";
import SelectCountry from "./components/SelectCountry";
import CovidStat from "./components/CovidStat";
import Map from "./components/Map";
import StatByCountry from "./components/StatByCountry";
import CovidChart from './components/CovidChart'

import "leaflet/dist/leaflet.css";
import "./App.css";

function App() {
  const [country, setCountry] = useState("worldwide");
  const [countries, setCountries] = useState([]);
  const [countryInfo, setCountryInfo] = useState([]);
  const [countriesInfo, setCountriesInfo] = useState([]);
  const [covidState, setCovidState] = useState("deaths");

  const getCountriesList = async () => {
    await fetch("https://disease.sh/v3/covid-19/countries")
      .then(res => res.json())
      .then(data => {
        const countries = data.map(country => ({
          name: country.country,
          value: country.countryInfo.iso2
        }));
        setCountriesInfo(data);
        setCountries(countries);
      });
  };

  const getCountriesCovidData = async url => {
    const data = await fetch(url).then(res => res.json());
    setCountryInfo(data);
  };

  const handleClick = covidcase => {
    setCovidState(covidcase);
  };

  useEffect(() => {
    getCountriesList();
  }, []);

  useEffect(() => {
    const url =
      country === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${country}`;
    getCountriesCovidData(url);
  }, [country]);

  const onChangeCountry = e => {
    setCountry(e.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1>COVID19-Tracker</h1>
        <SelectCountry
          country={country}
          countries={countries}
          onChangeCountry={onChangeCountry}
        />
      </header>
      <CovidStat
        handleClick={handleClick}
        covidstate={covidState}
        countryInfo={countryInfo}
      />
      <Map
        countries={countriesInfo}
        country={countryInfo}
        covidcase={covidState}
      />
      <StatByCountry countriesInfo={countriesInfo} />
      <CovidChart></CovidChart>
    </div>
  );
}

export default App;
