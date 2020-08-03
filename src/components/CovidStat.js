import React from "react";
import './CovidStat.css'

function Card({ title, number }) {
  return (
    <div className="covid-stat">
      <h1>{title}</h1>
      <h2>{number}</h2>
    </div>
  );
}

function CovidStat({mort, retabli, malade}) {
  return (
    <div className='stat__container'>
      <Card title="Mort" number={mort}/>
      <Card title="Retabli" number={retabli}/>
      <Card title="Malade" number={malade}/>
    </div>
  );
}

export default CovidStat;
