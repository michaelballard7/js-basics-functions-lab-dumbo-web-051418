// Code your solution in this file!

function distanceFromHqInBlocks(location){
  hqLocation = 42 
  
  if (location > 42){
    return location - 42
  }else{
    return hqLocation - location
  }
  
}

function distanceFromHqInFeet(location){
  
return distanceFromHqInBlocks(location)*264
}

function distanceTraveledInFeet(beg,dest){
  if (beg > dest){
    return (beg - dest) * 264
  }else if(dest > big){
    return(dest -big) *264
  } else {
    264
  }
}