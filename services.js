import { getServices } from "./database";

const services = getServices()

export const serviceList = () => {
    let serviceHTML = "<ul>"

    for (const service of services) {
        serviceHTML += `<li>${service.serviceName}</li>`
    }

    serviceHTML += "</ul>"

    return serviceHTML
}

