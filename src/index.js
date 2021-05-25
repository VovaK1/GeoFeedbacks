import { mapInit, openBalloon, updateStorage, getPlacemarks, updateBalloon, clusterInit, arrayCompare  } from './js/ymaps';
import { newFeedback,   } from './js/feedbacks';
const balloonForm = document.getElementById('form-balloon').innerHTML;

import './styles/main.scss'



(async () => {
const map = await mapInit();
const clusterer = await clusterInit(map);
let placemarks = getPlacemarks(); 
let coords = [];
clusterer.events.add('click', e => {
  coords = e.get('target').geometry.getCoordinates();
   const samePlaceMarks = [];
   placemarks.forEach(function(currentMark) {
     if (arrayCompare(currentMark.coords, coords)) {
       samePlaceMarks.push(currentMark);
     }
   })
 updateBalloon(samePlaceMarks);
 openBalloon(map, coords);
})

updateMap(placemarks, map);


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
  clusterer.removeAll();
  if (placemarks) {
    for (let item of placemarks) {
      let placemark = new ymaps.Placemark(item.coords);
      map.geoObjects.add(placemark);
      clusterer.add(placemark);
    }
  }
 } 


})();








