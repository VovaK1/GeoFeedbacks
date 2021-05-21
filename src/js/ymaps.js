var myMap;

const balloonForm = document.getElementById('form-balloon').innerHTML;

 function mapInit() {
     return new Promise((resolve) => {
        myMap = ymaps.ready(() => {
        myMap = new ymaps.Map('map', {
         center: [59.91, 30.3],
         zoom: 12,
         controls: ['zoomControl'],
         behaviors: ['drag'],
       })
       resolve(myMap);
     })
     })
}

function openBalloon(map, e) {
    let coords = [];
    coords = e.get('coords');
    map.balloon.open(coords, balloonForm);
    return coords;
}

function getPlacemarks() {
  return JSON.parse(localStorage.data || '[]');
}
function updateStorage(placemarks) {
  localStorage.data = JSON.stringify(placemarks);
  return JSON.parse(localStorage.data)
}

function updateMap(placemarks, map) {
  if (placemarks) {
    for (let item of placemarks) {
      let placemark = new ymaps.Placemark(item.coords);
      map.geoObjects.add(placemark);
    }
  }
 } 



export {
  mapInit,
  openBalloon,
  updateMap,
  getPlacemarks,
  updateStorage
}