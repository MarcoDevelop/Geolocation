var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "A localização geográfica não é suportada por este navegador.";
    }
}


function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
    var i = position.coords.latitude;
    var j = position.coords.longitude;
    console.log(i);
    console.log(j);
    map(i, j);
}

function map(a, b) {
    var map = L.map('location-map').setView([a, b], 17);

    mapLink = '<a href="https://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; ' + mapLink,
            maxZoom: 80,
        }).addTo(map);

    var marker = L.marker([a, b]).addTo(map);
}