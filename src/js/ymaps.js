import {newFeedback} from './feedbacks';
import template from '.././templates/feedback.hbs'
var myMap;

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

function openBalloon(map, coords) {
    map.balloon.open(coords, document.getElementById('form-balloon').innerHTML);
    return coords;
}

function getPlacemarks() {
  return JSON.parse(localStorage.data || '[]');
}
function updateStorage(placemarks) {
  localStorage.data = JSON.stringify(placemarks);
  return JSON.parse(localStorage.data)
}



function updateBalloon(samePlaceMarks) {
  if (!myMap.balloon.isOpen()) {
    const ul = document.createElement('ul');
    ul.classList.add('feedbacks')
    document.getElementById('form-balloon').prepend(ul);
    ul.innerHTML = template ({ samePlaceMarks });
  } else {
   if(document.getElementById('form-balloon').firstElementChild) {
    document.getElementById('form-balloon').firstElementChild.remove();
   }
  }
}

export {
  mapInit,
  openBalloon,
  getPlacemarks,
  updateStorage,
  updateBalloon
}