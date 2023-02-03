import { Services } from "./services.js"
import { ParkArea } from "./parkArea.js"
import { Guests } from "./guest.js"
import { ParkAreaServices } from "./parkAreaServices.js"


const applicationHTML = `
<img src="ciderlogo.jpg"></img>
<h1>Cider Falls</h1>
<article class="services">
    <section class="services--column list Services">
        <h2>Services</h2>
        ${Services()}
    </section>
    <section class="parkAreas--column list Park Areas">
        <h2>Park Areas</h2>
        ${ParkArea()}
    </section>
    <section class="guest--column list Guests">
        <h2>Guests</h2>
        ${Guests()}
    </section>
</article>

<article class="areaServices">
    <h2>Park Area Services</h2>
        ${ParkAreaServices()}
</article>
`

const mainContainer = document.querySelector("#container")
mainContainer.innerHTML = applicationHTML
