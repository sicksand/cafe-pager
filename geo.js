
navigator.geolocation.getCurrentPosition(function(position) {
 alert("reading loc..");
 // Get the user's latitude and longitude.
 var userLatitude = position.coords.latitude;
 var userLongitude = position.coords.longitude;

 // Get the latitude and longitude of the place.
 var placeLatitude = 1.537741; // Replace this with the latitude of the place you want to check.
 var placeLongitude = 103.662772; // Replace this with the longitude of the place you want to check.
 
 // Check if the user is within 500 meters of the place.
 var isWithin500Meters = haversine(userLatitude, userLongitude, placeLatitude, placeLongitude);
  
 // If the user is within 500 meters of the place, then alert the user and proceed to the next page.
 if (isWithin500Meters < 500) {
  alert("OK");
  
  // Proceed to the next page.
 } else {
  alert("You are not within 500 meters of the place.");
 }
});
