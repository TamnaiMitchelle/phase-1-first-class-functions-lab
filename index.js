// Code your solution in this file!

const returnFirstTwoDrivers = function (arrayOfDrivers = [driver1, driver2, driver3, driver4]) {
    
    return arrayOfDrivers.slice(0,2)
}

const returnLastTwoDrivers = function (arrayOfDrivers = [driver1, driver2, driver3, driver4]) {
    
    return arrayOfDrivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function (fare) {
         return fare * integer
    } 
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (arrayOfDrivers, returnFirstTwoDrivers) {
   
    return returnFirstTwoDrivers(arrayOfDrivers)
}