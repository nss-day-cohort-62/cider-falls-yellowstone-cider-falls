import { getServices } from "./database";

const services = getServices()

export const createServiceListHTML = () => {
    let serviceHTML = "<ul>"

    for (const service of services) {
        serviceHTML += `<li id="service--${service.id}>${service.serviceName}</li>`
    }

    serviceHTML += "</ul>"

    return serviceHTML
}

