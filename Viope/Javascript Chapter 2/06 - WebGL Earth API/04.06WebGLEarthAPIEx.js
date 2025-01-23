var earth;

function initialize() {
    var options = {
        atmosphere: true,
        center: [0, 0],
        zoom: 0
    };
    earth = new WE.map('earth_div', options);
  
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Â© OpenStreetMap contributors'
    }).addTo(earth);

}

function goHome() {
    var homeLat = 60.22444583990739;
    var homeLon = 24.943982917670024;
    earth.setView([homeLat, homeLon], 15);
}

function showCoords() {
    var center = earth.getCenter();
    alert(earth.getCenter());
    earth.setZoom(13);
}