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
  
  switch(distance){
    case distance < 400 :
      
  }
  
  
}