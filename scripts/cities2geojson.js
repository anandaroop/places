#! /usr/bin/env node

var cities = require('../cities.js')

collection = {
  type: "FeatureCollection",
  features : []
}

cities.forEach(function(city){
  collection.features.push({
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [city.coords[1],city.coords[0]]
    },
    "properties": {
      "name": city.name,
      "slug": city.slug,
      "sort_order": city.sort_order
    }
  })
})

console.log(JSON.stringify(collection));


// SAMPLE GEOJSON SYNTAX
// 
// {
//   "type": "FeatureCollection",
//   "features": [
//     {
//       "type": "Feature",
//       "geometry": {
//         "type": "Point",
//         "coordinates": [4.8951679000000015,52.3702157]
//       },
//       "properties": {
//         "name": "Amsterdam",
//         "slug": "amsterdam",
//         "sort_order": 1000
//       }
//     },

//     {
//       "type": "Feature",
//       "geometry": {
//         "type": "Point",
//         "coordinates": [-106.841831,39.1953106]
//       },
//       "properties": {
//         "name": "Aspen",
//         "slug": "aspen",
//         "sort_order": 1000
//       }
//     }    
//   ]
// }
