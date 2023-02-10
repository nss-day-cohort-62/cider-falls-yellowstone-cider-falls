import { createServiceListHTML } from "./services.js"
import { createParkAreaHTML } from "./parkArea.js"
import { createGuestHTML } from "./guest.js"
import { parkServiceMatch } from "./parkAreaServices.js"

// change article structure later

const applicationHTML = `
<header>
    <img class="image" src="ciderlogo.jpg"></img>
</header>

    <section class="detail--column list details_services">
            <h2>Services</h2>
                ${createServiceListHTML()}
    </section>

<article class="details">
    <section class="guest--column list Guests">
        <h2>Guests</h2>  
            ${createGuestHTML()}
    </section>   


<div class="park_container">
    <div class="park_areas">
        <h2>Park Areas</h2>
            ${createParkAreaHTML()}
    </div>
</div>

</article>


<div class="div-2">
    <section class="info--column list information">
        <h2>Guest's Info</h2>
            <ul>
        <li>Julia / 123-456-4564 /juliaslays123@gmail.com</li>
        <li>Frankie / 321-345-2345 / frankiedadude@gmail.com</li>
        <li>Nick / 456-232-1212 / nickguitargod@gmail.com</li>
        <li>Ely / 334-565-6787 / elythehusband@gmail.com</li>
            </ul>
</div>

`

const mainContainer = document.querySelector("#container")
mainContainer.innerHTML = applicationHTML

/*Prevoous code
<section class="services park areas">
        <div class="services box">
            <h2>Services</h2>
            <section class="services--column list Services">
                ${createServiceListHTML()}
            </section> 
        </div>

        <div class="area box">
            <h2>Park Areas</h2>
            <section class="parkAreas--column list Park Areas">
                ${createParkAreaHTML()}
            </section>
         </div>
</section>

    <h2>Guests</h2>
<section class="guest--column list Guests">
        ${createGuestHTML()}
</section>
*/


