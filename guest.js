import { getGuests } from "./database.js"

const guests = getGuests()

//Export a function that creates a list of guests html 
export const createGuestHTML = () => {
    let guestsHTML = `<ul class="guests">`

    for (const guest of guests){
        guestsHTML += `<li id="guest--${guest.id}"> ${guest.name}</li>`
    }
guestsHTML += "</ul>"

return guestsHTML

}