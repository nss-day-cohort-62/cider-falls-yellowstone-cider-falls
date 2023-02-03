import { createServiceListHTML } from "./services.js"
import { createParkAreaHTML } from "./parkArea.js"
import { createGuestHTML } from "./guest.js"
import { createParkAreaServiceHTML } from "./parkAreaServices.js"


const applicationHTML = `
<img src="ciderlogo.jpg"></img>
<h1>Cider Falls</h1>
<article class="services">
    <section class="services--column list Services">
        <h2>Services</h2>
        ${createServiceListHTML()}
    </section>
    <section class="parkAreas--column list Park Areas">
        <h2>Park Areas</h2>
        ${createParkAreaHTML()}
    </section>
    <section class="guest--column list Guests">
        <h2>Guests</h2>
        ${createGuestHTML()}
    </section>
</article>

<article class="areaServices">
    <h2>Park Area Services</h2>
        ${createParkAreaServiceHTML()}
</article>
`

const mainContainer = document.querySelector("#container")
mainContainer.innerHTML = applicationHTML
