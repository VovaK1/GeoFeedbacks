import { mapInit, openBalloon, updateStorage, getPlacemarks, updateBalloon, clusterInit, arrayCompare  } from './js/ymaps';
import { newFeedback,   } from './js/feedbacks';
const balloonForm = document.getElementById('form-balloon').innerHTML;

import './styles/main.scss'



(async () => {
const map = await mapInit();
let placemarks = getPlacemarks();

updateMap(placemarks, map);

let coords = [];

map.events.add('click', e => {
coords = e.get('coords');
if (!map.balloon.isOpen()) {
openBalloon(map, coords);
} else {
updateBalloon()
map.balloon.close();
}
})

document.addEventListener('click', e => {
  if (e.target.id === 'button') {
    e.preventDefault()
    const feedback = newFeedback(coords);
    if (feedback) {
    placemarks.push(feedback);
    updateStorage(placemarks);
    updateMap(placemarks, map);
   
    updateBalloon()
    map.balloon.close();
  } else {
    map.balloon.close();
  }}
})

function updateMap(placemarks, map) {
  if (placemarks) {
    const myGeoObjects = [];
    for (let item of placemarks) {
      let placemark = new ymaps.Placemark(item.coords);
      myGeoObjects.push(placemark);
      map.geoObjects.add(placemark);
      const clusterer =  clusterInit(map, myGeoObjects);  
      clusterer.events.add('click', e => {
         coords = e.get('target').geometry.getCoordinates();
          console.log(coords)
          const samePlaceMarks = [];
          placemarks.forEach(function(currentMark) {
            if (arrayCompare(currentMark.coords, coords)) {
              samePlaceMarks.push(currentMark);
            }
          })
        updateBalloon(samePlaceMarks);
        coords = openBalloon(map, coords);
      })
    }
  }
 } 


})();








