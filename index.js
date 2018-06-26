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

function distanceTravelledInFeet(beg,dest){
  if (beg > dest){
    return (beg - dest) * 264
  }else if(dest > beg){
    return(dest -beg) *264
  } else {
    264
  }
}

function calculatesFarePrice(start, destination){
  
  let distance = distanceTravelledInFeet(start,destination)
  
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * distance-1;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}