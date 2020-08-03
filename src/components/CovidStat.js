import React from "react";
import './CovidStat.css'
import { casesTypeproperty } from './utils/utils'

function Card({ covidcase, title, number, onClick }) {

  return (
    <div style={{borderColor:casesTypeproperty[covidcase].color }} className="covid-stat" value='qwe' onClick= {() => onClick(covidcase)} >
      <h1>{title}</h1>
      <p>{number?number.toLocaleString():0}</p>
    </div>
  );
}

function CovidStat({countryInfo ,handleClick } ) {
  return (
    <div className='stat__container'>
      <Card onClick={handleClick} covidcase="deaths" title="mort" number={countryInfo.deaths} />
      <Card onClick={handleClick} covidcase="recovered" title="retabli" number={countryInfo.recovered}/>
      <Card onClick={handleClick} covidcase="cases" title="malade" number={countryInfo.cases}/>
    </div>
  );
}

export default CovidStat;
