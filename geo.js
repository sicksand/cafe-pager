function haversine(userLatitude, userLongitude, placeLatitude, placeLongitude) {
 var R = 6371e3; // Earth's radius in meters
 var lat1 = userLatitude * Math.PI / 180; // Convert latitudes to radians
 var lat2 = placeLatitude * Math.PI / 180;

 var dLat = (lat2 - lat1) / 2;
 var dLon = (placeLongitude - userLongitude) * Math.PI / 180;

 var a = Math.pow(Math.sin(dLat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dLon / 2), 2);
 var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

 var distance = R * c;
 
 return distance;
}

navigator.geolocation.getCurrentPosition(function(position) {
 Swal.fire(
  'Kejap',
  'Pokcik check location jap...',
  'success'
)
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
   Swal.fire(
   'Hmm...',
   'Pokcik rasa korang takde kat cafe',
   'warning'
    )
   // document.write("");
   // Redirects to the specified URL after 5 seconds
   setTimeout(function() {
     location.replace("https://linktr.ee/dapomokcikkopipokcik");
   }, 1000);
  
   }
 
  
});
