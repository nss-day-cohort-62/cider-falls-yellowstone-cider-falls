import { getParkAreas } from "./database.js"

const parkAreas = getParkAreas()

export const parkArea = () =>{
    let html = "<ul>"

    for (const area of parkAreas){
        html += `<li id="${area.id}">${area.areaName}</li>`
    }
    html += "</ul>"
    return html
}