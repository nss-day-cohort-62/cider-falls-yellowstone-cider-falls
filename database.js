

const database = {
    services: [
        { id: 1, serviceName: "Rafting"},
        { id: 2, serviceName: "Canoeing"},
        { id: 3, serviceName: "Fishing"},//fishing is in 2
        { id: 4, serviceName: "Hiking"}, //hiking is in 3 areas
        { id: 5, serviceName: "Picknicking"},//picknicking is in 3
        { id: 6, serviceName: "Rock Climbing"},
        { id: 7, serviceName: "Lodging"},//lodging is in 2
        { id: 8, serviceName: "Parking"},//parking is in 2
        { id: 9, serviceName: "Information"},//info is in 2
        { id: 10, serviceName: "Zipline"},
    ],
    parkAreas: [
        { id: 1, areaName: "Champfort River"},
        { id: 2, areaName: "Lost Wolf Hiking Trail"},
        { id: 3, areaName: "Lodge"},
        { id: 4, areaName: "Gander River"},
        { id: 5, areaName: "Campgrounds"},
        { id: 6, areaName: "Pine Bluffs Trails"},
    ],

    guests: [{
        id: 1,
        name: "Julia Degnan",
        parkAreaId: 3, 
    }, {
        id: 2,
        name: "Nick Adams",
        parkAreaId: 2,
    }, {
        id: 3,
        name: "Ely Dorado",
        parkAreaId: 4, 
    }, {
        id: 4,
        name: "Frankie Bruno",
        parkAreaId: 5, 
    }],

    areaServices: [{
    }, {
        id: 1,
        serviceId: 1,
        parkAreaId: 1
    }, {
        id: 2,
        serviceId: 2,
        parkAreaId: 1
    }, {
        id: 3,
        serviceId: 3,
        parkAreaId: [1, 4]
    }, {
        id: 4,
        serviceId: 4,
        parkAreaId: [2, 4, 6]
    }, {
        id: 5,
        serviceId: 5,
        parkAreaId: [2, 3, 6]
    }, {
        id: 6,
        serviceId: 6,
        parkAreaId: 2
    }, {
        id: 7,
        serviceId: 7,
        parkAreaId: [3, 5]
    }, {
        id: 8,
        serviceId: 8,
        parkAreaId: [3, 5]
    }, {
        id: 9,
        serviceId: 9,
        parkAreaId: [3, 5]
    },{
        id: 10, 
        serviceId: 10,
        parkAreaId: 6
}],
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getParkAreas = () => {
    return database.parkAreas.map(parkArea => ({...parkArea}))
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getAreaServices = () => {
        return database.areaServices.map(areaService => ({...areaService}))
}
