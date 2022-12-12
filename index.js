// Code your solution in this file!
const HQ = 42;
function distanceFromHqInBlocks(userLocation) {
    if (userLocation > HQ) {
        return userLocation - HQ;
    } else if (HQ > userLocation) {
        return HQ - userLocation;
    } else {
        return 1;
    }
}
function distanceFromHqInFeet(someValue) {
  let distance = distanceFromHqInBlocks(someValue);
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
   return distance * 264
  // the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if (start > destination) {
        return (start-destination)*264
    } else if (start < destination) {
        return (destination-start)*264
    } else {
        return 1;
    }
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distance = distanceTravelledInFeet(start,destination);
    if (distance <= 400){
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance-400) * .02;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else if (distance > 2500) {
        return("cannot travel that far");
    }
  }