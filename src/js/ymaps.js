import {newFeedback} from './feedbacks';

var myMap;

const balloonForm = document.getElementById('form-balloon').innerHTML;
const template = Handlebars.compile(balloonForm);


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




function updateBalloon(coords) {
  const ul = document.getElementById('other-feedbacks');
  if (array) {
  ul.classList.add('visible');

  }
}

export {
  mapInit,
  openBalloon,
  
  getPlacemarks,
  updateStorage
}