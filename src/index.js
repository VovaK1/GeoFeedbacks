import { mapInit, openBalloon, updateStorage, getPlacemarks,  } from './js/ymaps';
import { newFeedback,   } from './js/feedbacks';
const balloonForm = document.getElementById('form-balloon').innerHTML;
import './styles/main.scss'


(async () => {
const map = await mapInit();
let placemarks = getPlacemarks();
updateMap(placemarks, map);

console.log(placemarks)

let coords = [];

map.events.add('click', e => {
coords = e.get('coords');
if (!map.balloon.isOpen()) {
 openBalloon(map, coords);
} else {
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
    console.log(placemarks)
    updateMap(placemarks, map);
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
        coords = openBalloon(map, placemark.geometry._coordinates);
        placemarks.forEach(function(currentMark) {
          console.log(currentMark.coords)
          console.log(coords)
          console.log(currentMark.coords == coords)
          if (currentMark.coords == coords) {
            samePlaceMarks.push(currentMark);

          }
        })
        console.log(samePlaceMarks)
      })

    }
  }
 } 

})();








