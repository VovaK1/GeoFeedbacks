import { mapInit, openBalloon, updateStorage, getPlacemarks, updateBalloon  } from './js/ymaps';
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
    for (let item of placemarks) {
      let placemark = new ymaps.Placemark(item.coords, {balloonContent: ''});
      map.geoObjects.add(placemark);
      placemark.events.add('click', e => {
        const samePlaceMarks = [];
        placemarks.forEach(function(currentMark) {
          if (arrayCompare(currentMark.coords, placemark.geometry._coordinates)) {
            samePlaceMarks.push(currentMark);
          }
        })
        updateBalloon(samePlaceMarks);
        coords = openBalloon(map, placemark.geometry._coordinates);
      })
      
    }
  }
 } 

 function arrayCompare(a, b)
{
    for(let i = 0; i < a.length; i++) {   
       if(a[i] != b[i])
      return false;
    }
    return true;
}

})();








