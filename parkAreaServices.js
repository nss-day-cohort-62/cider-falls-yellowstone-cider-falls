import { getParkAreas } from "./database.js";
import { getServices } from "./database.js";
import { getAreaServices } from "./database.js";

const parkAreas = getParkAreas();
const justServices = getServices();
const parkServices = getAreaServices();


//function that returns the offered services with the park area//
//if serviceId equals the service.id then
//use array.isarray method to check if the parkAreaId is an array then return the array//
//else if its not an array then print back that service//

const supportedServices = (areaObj, allServices) => {
  let supportedService = null;

  for (const service of allServices) {
    if (areaObj.serviceId === service.id) {
      supportedService = service;
    }
  }
  return supportedService;
};

const findAreaMatch = (areaObj, allAreas) => {
  let areaMatch = null;

  for (const area of allAreas) {
    if (areaObj.parkAreaId === area.id) {
      areaMatch = area;
    }
  }

  return areaMatch;
};

export const parkServiceMatch = () => {
  let html = "";
  html += "<ul>";

  for (const parkService of parkServices) {
    const offeredServices = supportedServices(parkService, justServices);
    const assignedArea = findAreaMatch(parkService, parkAreas);

    html += `<li>${assignedArea.areaName} offers ${offeredServices.serviceName}</li>`;
  }

  html += "</ul>";

  return html;
};
