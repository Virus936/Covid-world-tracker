import React, { useState, useEffect } from "react";
import SelectCountry from "./components/SelectCountry";
import CovidStat from "./components/CovidStat";
import Map from "./components/Map";
import StatByCountry from "./components/StatByCountry";

import "leaflet/dist/leaflet.css";
import "./App.css";


function App() {
  const [country, setCountry] = useState("worldwide");
  const [countries, setCountries] = useState([]);
  const [countryInfo, setCountryInfo] = useState([]);
  const [countriesInfo, setCountriesInfo] = useState([]);
  const [covidState, setCovidState] = useState("deaths");

  const sortedData = (a,b)=>{
    if(a["deaths"] < b["deaths"])
      return 1
    if(a["deaths"] > b["deaths"])
      return -1
    return 0 
  }

  const getCountriesList = async () => {
    const listcountry = await fetch( "https://disease.sh/v3/covid-19/countries")
      .then(function(res){
        const data = res.json()
        data.then(value=> setCountriesInfo(value.sort(sortedData)))
        return data
      })
      .then(data =>
        data.map(country => ({
          name: country.country,
          value: country.countryInfo.iso2
        }))
      );
    setCountries(listcountry);
  };

  const getCountriesCovidData = async (url) => {
    const data = await fetch(url)
      .then(res=> res.json())
    setCountryInfo(data)
  }

  useEffect(() => {
    getCountriesList();
  }, []);

  useEffect(() => {
    const url = country === 'worldwide' ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${ country }`
    getCountriesCovidData(url)
  }, [country]);

  const onChangeCountry = (e) => {
    setCountry(e.target.value)
  }
  return (
    <div className="App">
      <header>
        <h1>COVID19-Tracker</h1>
        <SelectCountry 
          country={country} 
          countries = {countries} 
          onChangeCountry={onChangeCountry} />
      </header>
      <CovidStat mort={ countryInfo.deaths } malade={countryInfo.cases} retabli={countryInfo.recovered} />
      <Map position={[46.845, 2.878]} countries={countryInfo} />
      <StatByCountry countriesInfo = {countriesInfo}/>
    </div>
  );
}

export default App;
