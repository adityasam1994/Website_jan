var d = document.getElementById("dis");

function sp(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(distance, showError);
    } else { 
        d.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function distance(position) {

    

    var lat1=position.coords.latitude;
    var lon1=position.coords.longitude;
    var lat2=26.85
    var lon2=83.9
    var unit="K"

	var radlat1 = Math.PI * lat1/180
	var radlat2 = Math.PI * lat2/180
	var theta = lon1-lon2
	var radtheta = Math.PI * theta/180
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	if (dist > 1) {
		dist = 1;
	}
	dist = Math.acos(dist)
	dist = dist * 180/Math.PI
	dist = dist * 60 * 1.1515
	if (unit=="K") { dist = dist * 1.609344 }
	if (unit=="N") { dist = dist * 0.8684 }

    // y.innerHTML="Distance: "+dist

    if (dist>96.561){
        d.innerHTML="This product can't be delivered to your location."+dist
        
    }
    else {
        d.innerHTML=dist;
        document.getElementById('dis').classList.add('er');
    }


    
}

function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        d.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        d.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        d.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        d.innerHTML = "An unknown error occurred."
        break;
    }
  }

  function GetLocation() {
    var geocoder = new google.maps.Geocoder();
    var address = "10 downing street";
    geocoder.geocode({ 'address': address },source = "dsk", function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();
            alert("Latitude: " + latitude + "\nLongitude: " + longitude);
        } else {
            alert("Request failed.")
        }
    },300);
};



    

//window.onload = sp();
