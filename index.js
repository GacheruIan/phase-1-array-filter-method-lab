// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, traits) {
    return drivers.filter(function (driver) { return driver.toLowerCase() === traits.toLowerCase() })
  }
function fuzzyMatch(drivers, traits) {
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, traits.length) === traits.toLowerCase() })
  }
  
function matchName(drivers, traits) {
    return drivers.filter(function (driver) { return driver.name === traits})
  }