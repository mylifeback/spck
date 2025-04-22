//const json1 = '{"time":"8 Apr 2025 at 1:32 PM","lat":"23.28313310358927","alt":"79.1931915283203","lon":"115.1561049651511","input":"CClinic"}';
//const json2 = '{"time":"8 Apr 2025 at 1:32 PM","lat":"23.28313310358927","alt":"79.1931915283203","lon":"115.1561049651511","input":"CClinic"}';

const json1 = global("OldGPS");
const json2 = global("NewGPS");

let gps1 = JSON.parse(json1);
let gps2 = JSON.parse(json2);


var lat1 = gps1.lat
var lon1 = gps1.lon
var lat2 = gps2.lat
var lon2 = gps2.lon

//const element = document.getElementById("dis");
var km = distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2)
var yard = 1093.613 * km
//element.textContent = yard.toString() + " yards";
setGlobal("DISTANCEinYARD", yard);

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}

function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    var earthRadiusKm = radiusAtLatitude(lat1)
    var dLat = degreesToRadians(lat2-lat1);
    var dLon = degreesToRadians(lon2-lon1);
    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return earthRadiusKm * c;
}

function radiusAtLatitude (lat){
  var radian = degreesToRadians(lat);
  var nominator = 6378.1*6356.8;
  var denominator = Math.sqrt(Math.pow((Math.cos(radian)*6378.1), 2) + Math.pow((Math.sin(radian)*6356.8), 2));
  var radius = nominator / denominator;
  return radius
  // https://www.quora.com/How-do-you-calculate-the-Earth-s-radius-at-a-given-lat-long
}



