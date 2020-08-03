const sortedData = (a,b)=>{
  if(a["deaths"] < b["deaths"])
    return 1
  if(a["deaths"] > b["deaths"])
    return -1
  return 0 
}


export default sortedData
