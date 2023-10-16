// Code your solution here

function findMatching(drivers, query) {
    const matchingDrivers = [];
  
    drivers.forEach(driver => {
      if (driver.toLowerCase().includes(query.toLowerCase())) {
        matchingDrivers.push(driver);
      }
    });
  
    return matchingDrivers;}
    function fuzzyMatch(drivers, query) {
        const matchingDrivers = [];
      
        for (let i = 0; i < drivers.length; i++) {
          if (drivers[i].startsWith(query)) {
            matchingDrivers.push(drivers[i]);
          }
        }
      
        return matchingDrivers;
      }
      function matchName(drivers, name) {
        return drivers.filter(driver => driver.name === name);
      }
      
      const drivers = [
        { name: "John", hometown: "New York" },
        { name: "Jane", hometown: "Los Angeles" },
        { name: "John", hometown: "Chicago" },
        { name: "Alex", hometown: "Miami" },
      ];   