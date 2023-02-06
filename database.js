

const database = {
    Services: [
        { id: 1, name: },
        { id: 2, name: 8},
        { id: 3, name: 5},
        { id: 4, name: 9},
        { id: 5, name: 2},
        { id: 6, name: 4},
        { id: 7, name: 1},
        { id: 8, name: 7},
        { id: 9, name: 3},
        { id: 10, name: 6},
        { id: 11, name: 6},
        { id: 12, name: 9},
        { id: 13, name: 5},
        { id: 14, name: 10},
    ],
    parkArea: [
        { id: 1, name: "Pittsburgh"},
        { id: 2, name: "Minneapolis"},
        { id: 3, name: "Phoenix"},
        { id: 4, name: "Tucson"},
        { id: 5, name: "Denver"},
        { id: 6, name: "Boise"},
        { id: 7, name: "San Diego"},
        { id: 8, name: "Sarasota"},
        { id: 9, name: "White Plains"},
        { id: 10, name: "Chicago"}
    ],
    Guest: [{
        id: 1,
        name: "Alphonse Meron",
        email: "ameron0@mashable.com",
        
    }, {
        id: 2,
        name: "Damara Pentecust",
        email: "dpentecust1@apache.org",
        
    }, {
        id: 3,
        name: "Anna Bowton",
        email: "abowton2@wisc.edu",
        
    }, {
        id: 4,
        name: "Hunfredo Drynan",
        email: "hdrynan3@bizjournals.com",
       
    }, {
        id: 5,
        name: "Elmira Bick",
        email: "ebick4@biblegateway.com",
    }, {
        id: 6,
        name: "Bernie Dreger",
        email: "bdreger5@zimbio.com",
    }, {
        id: 7,
        name: "Rolando Gault",
        email: "rgault6@google.com",
    }, {
        id: 8,
        name: "Tiffanie Tubby",
        email: "ttubby7@intel.com",
    }, {
        id: 9,
        name: "Tomlin Cutill",
        email: "tcutill8@marketwatch.com",
    }, {
        id: 10, //PK
        name: "Arv Biddle",
        email: "abiddle9@cafepress.com",
    }],
    parkAreaServices: [{
        id: 1, //primary key
        name: "Dianemarie Hartness",
        walkerId: 3, //foreign key
       
    }, {
        id: 2,
        name: "Christoph Fosdyke",
        walkerId: 10
    }, {
        id: 3,
        name: "Rocket",
        walkerId: 7
    }, {
        id: 4,
        name: "Ebony",
        walkerId: 3
    }, {
        id: 5,
        name: "Scotty",
        walkerId: 8
    }, {
        id: 6,
        name: "Mac",
        walkerId: 2
    }, {
        id: 7,
        name: "Oreo",
        walkerId: 5
    }, {
        id: 8,
        name: "Sassy",
        walkerId: 1
    }, {
        id: 9,
        name: "Salem",
        walkerId: 9,
        cityId: 2 
    }, {
        id: 10,
        name: "Panda",
        walkerId: 7,
        cityId: 1
    }]
}

export .map