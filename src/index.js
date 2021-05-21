import { mapInit, openBalloon, updateStorage, getPlacemarks, updateMap } from './js/ymaps';
import { newFeedback,   } from './js/feedbacks';

import './styles/main.scss'


(async () => {
const map = await mapInit();
let placemarks = getPlacemarks();
updateMap(placemarks, map);

let coords = [];

map.events.add('click', e => {
coords = [];
if (!map.balloon.isOpen()) {
 coords =  openBalloon(map, e);
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
    updateMap(placemarks, map);
    map.balloon.close();
  } else {
    map.balloon.close();
  }}
})
})();








