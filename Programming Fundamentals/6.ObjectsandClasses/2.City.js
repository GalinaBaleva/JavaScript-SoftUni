// function city(objectCity) {
//         console.log(`name -> ${objectCity.name}`);
//         console.log(`area -> ${objectCity.area}`);
//         console.log(`population -> ${objectCity.population}`);
//         console.log(`country -> ${objectCity.country}`);
//         console.log(`postCode -> ${objectCity.postCode}`);
// }
// let objectCity = {
//     name: "Sofia",
//     area: 492,
//     population: 1238438,
//     country: "Bulgaria",
//     postCode: "1000"
// };
// city(objectCity);

function city(city) {
    for(let key of Object.keys(city)){
        console.log(`${key} -> ${city[key]}`)
    }
    
}
let objectCity = {
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
};
city(objectCity)

