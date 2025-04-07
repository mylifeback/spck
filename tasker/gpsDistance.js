function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}

function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    //var earthRadiusKm = 6371;
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
  var radian = degreesToRadians(lat)
  var nominator = 6378.1*6356.8
  var denominator = ((MATH.cos(radian)*6378.1)^2 + (MATH.sin(radian)*6356.8)^2) ^ 0.5
  var radius = nominator / denominator
  return radius
  // https://www.quora.com/How-do-you-calculate-the-Earth-s-radius-at-a-given-lat-long
}


var lat1 = json1.lat
var lon1 = json1.lon
var lat2 = json2.lat
var lon2 = json2.lon



var distance = 1093.613 * distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2)

var deltatime = json2.time - json1.time

var clubcurrent = club
var holecurrent = hole
var coursecurrent = course
var strokecurrent = stroke + 1
stroke = strokecurrent



// get result = distance in yards
// get time elapsd = deltatime in seconds
// get club = clubcurrent
// get stroke = strokecurrent
// get hole = holecurrent
// get course = coursecurrent