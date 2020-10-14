/*
I've hard coded price and m² values, it can be changed if needed
*/

const apartments = [{_id: 0,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque earum quam porro.",
    image: require("../images/apartment.png"),
    location:"Sint-Rochusstraat 6, 2100 Derune",
    sqmtr: "1.384 m²",
    rooms: 14,
    price: "€ 2.150.000"
},
{_id: 1,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque earum.",
    image: require("../images/apartment.png"),
    location:"Hendrik Schoofstraat 17, 2960 Brecht",
    sqmtr: "145 m²",
    rooms: 2,
    price: "€ 299.000"
},
{_id: 2,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing.",    
    image: require("../images/apartment.png"),
    location:"Oude Booischotsebaan 6, 2820 Rijmenam",
    sqmtr: "145 m²",
    rooms: "Studio",
    price: "Uitverkocht"
},
{_id: 3,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    image: require("../images/apartment.png"),
    location:"Oude Booischotsebaan 6, 2820 Rijmenam",
    sqmtr: "145 m²",
    rooms: 1,
    price: "Prijs op aanvraag"
},
{_id: 4,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque earum quam porro.",
    image: require("../images/apartment.png"),
    location:"Sint-Rochusstraat 6, 2100 Derune",
    sqmtr: "1.384 m²",
    rooms: 14,
    price: "€ 2.150.000"
},
{_id: 5,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    image: require("../images/apartment.png"),
    location:"Oude Booischotsebaan 6, 2820 Rijmenam",
    sqmtr: "145 m²",
    rooms: 1,
    price: "Prijs op aanvraag"
},
{_id: 6,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque earum quam porro.",
    image: require("../images/apartment.png"),
    location:"Sint-Rochusstraat 6, 2100 Derune",
    sqmtr: "1.384 m²",
    rooms: 14,
    price: "€ 2.150.000"
},
{_id: 7,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    image: require("../images/apartment.png"),
    location:"Hendrik Schoofstraat 17, 2960 Brecht",
    sqmtr: "145 m²",
    rooms: 2,
    price: "€ 299.000"
},
{_id: 8,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    image: require("../images/apartment.png"),
    location:"Oude Booischotsebaan 6, 2820 Rijmenam",
    sqmtr: "145 m²",
    rooms: "Studio",
    price: "Uitverkocht"
},
];

export function getApartments() {
    return apartments;
}

export function getApartment(id) {
    return apartments.find(ap => ap._id === id);
}
