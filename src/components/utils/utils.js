const sortedData = (a,b)=>{
  if(a["deaths"] < b["deaths"])
    return 1
  if(a["deaths"] > b["deaths"])
    return -1
  return 0 
}


const deaths={
  color:'red',
  multiplier:2000
}
const cases={
  color:'blue',
  multiplier:800
}
const recovered={
  color:'green',
  multiplier:700
}


export default sortedData
export const casesTypeproperty = { deaths, cases, recovered }
