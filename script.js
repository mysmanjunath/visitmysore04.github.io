function openNav() {
    document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

function initMap() {
    var mysore = { lat: 12.2958, lng: 76.6394 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: mysore
    });

    var attractions = [
        { position: { lat: 12.3051, lng: 76.6552 }, title: "Mysore Palace" },
        { position: { lat: 12.2857, lng: 76.6500 }, title: "Mysore Zoo" },
        { position: { lat: 12.2958, lng: 76.6408 }, title: "St. Philomena's Church" },
        { position: { lat: 12.3052, lng: 76.6413 }, title: "Chamundi Hill" },
        { position: { lat: 12.3071, lng: 76.6443 }, title: "Karanji Lake" }
    ];

    attractions.forEach(function(attraction) {
        new google.maps.Marker({
            position: attraction.position,
            map: map,
            title: attraction.title
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Update download count
    document.getElementById("downloadCount").textContent = "1500";
});