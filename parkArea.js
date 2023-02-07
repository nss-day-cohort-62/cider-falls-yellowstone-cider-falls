import { getParkAreas } from "./database.js"

const parkAreas = getParkAreas()

export const createParkAreaHTML = () =>{
    let html = "<ul>"

    for (const area of parkAreas){
        html += `<li id="area--${area.id}">${area.areaName}</li>`
    }
    html += "</ul>"
    return html
}