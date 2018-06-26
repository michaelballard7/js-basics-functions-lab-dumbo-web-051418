// Code your solution in this file!

function distanceFromHqInBlocks(location){
  hqLocation = 42 
  
  if (location > 42){
    return location - 42
  }else{
    return hqLocation - location
  }
  
}

function distanceFromHqInFeet(beg,dest){
  return dest - beg * 264
}