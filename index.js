// const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

// assigning variable to anonymous function that accepts an array of drivers as an argument
const returnFirstTwoDrivers = function(arrayOfDrivers) {
   return arrayOfDrivers.slice(0, 2);
}

// assigning variable to anonymous function that accepts an array of drivers as an argument
const returnLastTwoDrivers = function(arrayOfDrivers) {
    return arrayOfDrivers.slice(-2);
}
// assigning variable to an array containing two elements: the two functions previously defined
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// assigning variable to a function that takes in one argument, an integer
// returns a function that will multiply a fare for a ride
const createFareMultiplier = function(multiplier) {
    return function(value) {
        return value * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);
// fareDoubler(4) would return 8

const fareTripler = createFareMultiplier(3);
// fareTripler(4) would return 12

const selectDifferentDrivers = function(arrayOfDrivers, fnOption) {
    return fnOption(arrayOfDrivers);
}