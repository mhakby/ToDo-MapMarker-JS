// Global Değişkenler
var map;

navigator.geolocation.getCurrentPosition(loadMap, console.log("user rejected"));

// For selecting coords
function onMapClick(e) {
  L.marker(e.latlng).addTo(map).bindPopup("Deneme");
}

function loadMap(e) {
  map = L.map("map").setView([e.coords.latitude, e.coords.longitude], 13); // haritanın ilk açıldığı anda kullanıcının konumundan başlamasını istiyoruz.

  // haritanın nasıl görüneceğini belirler, kütüphaneden gelen
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 21,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // haritaya tıklanma olayını izleme.. leafletjs.com'daki guide'den geldi.
  map.on("click", onMapClick);
}

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const toggleButton = document.querySelector("#toggleButton");
  const sidebarVariable = document.querySelector(".sidebar-variable");

  toggleButton.addEventListener("click", function () {
    if (sidebar.style.width === "0px" || sidebar.style.width === "") {
      sidebar.style.width = "40vh";
      sidebarVariable.style.display = "flex";
      toggleButton.innerHTML = "keyboard_double_arrow_left";
    } else {
      sidebar.style.width = "0";
      toggleButton.innerHTML = "keyboard_double_arrow_right";
    }
  });
});
