import { getParkAreas } from "./database.js";
import { getGuests } from "./database.js";

const parkAreas = getParkAreas();
const guests = getGuests();

const guestCount = (areaId) => {
  let guestNumber = [];

  for (const guest of guests) {
    if (guest.parkAreaId === areaId) {
      guestNumber.push(guest);
    }
  }
  return guestNumber;
};

//Add a click event that displays number of park guests when a park area is clicked

//Create Click Event
document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("area")) {
    const [, areaId] = itemClicked.id.split("--");

    for (const area of parkAreas) {
      if (area.id === parseInt(areaId)) {
        const guestCounter = guestCount(parseInt(areaId));
        const guestLength = guestCounter.length;

        //This area currently has {number} of guests
        window.alert(` ${guestLength} guest are in this area`);
      }
    }
  }
});

export const createParkAreaHTML = () => {
  let html = `<ul class="areas">`;

  for (const area of parkAreas) {
    html += `<li id="area--${area.id}">${area.areaName}</li>`;
  }
  html += "</ul>";
  return html;
};
