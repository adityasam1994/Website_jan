var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
    
    
}

function sp(){
    navigator.geolocation.getCurrentPosition(distance);
}

function distance(position) {

    var c = document.getElementById("show_available");

    var lat1=position.coords.latitude;
    var lon1=position.coords.longitude;
    var lat2=26.74999
    var lon2=83.40246
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
        c.innerHTML="Not Available"
    }
    else{
        c.innerHTML="Available"
    }


    
}

function getad(){
    navigator.geolocation.getCurrentPosition(GetAddress);
}


function GetAddress(position) {
                var lat = (position.coords.latitude);
                var lng = (position.coords.longitude);
                var latlng = new google.maps.LatLng(lat, lng);
                var geocoder = geocoder = new google.maps.Geocoder();
                geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            // alert("Location: " + results[1].formatted_address);
                            var z=document.getElementById("ad");
                            x.innerHTML="Your current location is "+results[1].formatted_address;
                        }
                    }
                });
            }



    function GetAddresses() {
        var lat = parseFloat(document.getElementById("txtLatitude").value);
        var lng = parseFloat(document.getElementById("txtLongitude").value);
        var latlng = new google.maps.LatLng(lat, lng);
        var geocoder = geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'latLng': latlng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                    alert("Location: " + results[1].formatted_address);
                }
            }
        });
    }
