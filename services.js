import { getServices } from "./database.js";
import { getParkAreas } from "./database.js";
import { getAreaServices } from "./database.js";



const parkAreas = getParkAreas();
const services = getServices();
const parkServices = getAreaServices();// join table

// When a park guest clicks on one of the services, 
// a message should be displayed show which park areas support that service.


// seems that the function variabls = null doesn't read on the click event
// every function i've invoked so far whether singularly or combined causes an "undefined"
// message to appear where our interpolation is placed
// problem might be in our naming conventions/our connections between the functions and click event


// 

// create a widdle function to turn parkServices array into object :')
// ORRRRRR we iterate thru parkService in nested/parallel for loop 

// 

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
    if (itemClicked.id.startsWith("service")) {
      const [, serviceId] = itemClicked.id.split("--");
        let matchingService = null;

      for (const service of services) { 
        // for (const parkService of parkServices) {
        if (service.id === parseInt(serviceId)) {
            matchingService = service
            }
        }
        let parkName = "";
        for (const areaService of parkServices) {
            if (areaService.serviceId === matchingService.id) {
                // console.log(areaService)
                for (const parkArea of parkAreas) {
                    if (areaService.parkAreaId === parkArea.id)
                    parkName += `${parkArea.areaName}, `
                   
                }
                
                }
              
            }
            window.alert(`${parkName} supports this service.`);
        }
        
            // const createdMatch = createAreaMatch(matchingService);
            // const displayService = serviceWindow(createdMatch);
        //      console.log(displayService) // FLAG FLAG FLAG
        
        
        // }
        });

// easy way out would be to assign a foreign key to either service array or parkArea
// so we can then make a pairing and then simplify the click event
// might muddle the data ; make things more confusing

export const createServiceListHTML = () => {
    let serviceHTML = "<ul>"

    for (const service of services) {
        serviceHTML += `<li id="service--${service.id}">${service.serviceName}</li>`
    }

    serviceHTML += "</ul>"

    return serviceHTML
}


// make a function that returns an area match
// in this function, we need to iterate through the parkAreas
// if areaServices.parkAreaId === parkArea.id
// create a variable to store that new info in function
// return it

const createAreaMatch = (areaObj) => {
    let areaMatch = null;

    for (const area of parkAreas) { // might be out of scope
        if (areaObj.parkAreaId === area.id) { // iterate thru areaObj somehow
            areaMatch = area;
        }
    }
    return areaMatch
}


// make a function that returns offered services in area (?)
// accepts input of previous function as parameter
// in this function, we iterate through services
// if areaServices.serviceId === service.id
// create variable to store service in function
// return it

const serviceWindow = (matchObj) => {
    let offeredService = null;

    for (const service of services) {
        if (matchObj.serviceId === service.id) {
            offeredService = service;
        }
    }
    return offeredService
}

// in click event, we'll invoke that function in a variable
// input the correct interpolation for the window alert


// const findServices = (areaObj, allServices) => {
//     let foundService = null;
  
//     for (const service of allServices) {
//       if (areaObj.serviceId === service.id) {
//         foundService = service;
//       }
//     }
//     return foundService;
//   };

//   // make a function that matches services to park areas
// // iterate through areas (if parkArea.id === area)

// const findAreaMatch = (areaObj, allAreas) => {
//     let areaMatch = null;
  
//     for (const area of allAreas) {
//       if (areaObj.parkAreaId === area.id) {
//         areaMatch = area;
//       }
//     }
  
//     return areaMatch;
//   };




  
