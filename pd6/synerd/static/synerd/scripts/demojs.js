//start of drag and drop feature
function allowDrop(ev) {
ev.preventDefault();
}

function drag(ev) {
ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
}
//End of drag and drop feature

//start of Geolocation
var x = document.getElementById("demo");
function getLocation() {
	if (navigator.geolocation) {
				 navigator.geolocation.getCurrentPosition(showPosition);
			 } else {
				 x.innerHTML = "Geolocation is not supported by this browser.";
			 }
}

function showPosition(position) {
	x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}
// End of Geolocation
