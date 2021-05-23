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

// function clusterInit(map, array) {
//   clusterer.add(array);
//   clusterer.events.add("click", (e) => {
//   let coords = e.get("target").geometry.getCoordinates();
//       openBalloon(map, coords);
//      });
//   map.geoObjects.add(clusterer);
// }

function clusterInit(map, array) {
    const clusterer = new ymaps.Clusterer({
      clusterDisableClickZoom: true,
      groupByCoordinates: true,
      clusterOpenBalloonOnClick: false,
    });
    clusterer.add(array);
    map.geoObjects.add(clusterer);
    return clusterer;
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

 function arrayCompare(a, b)
{
    for(let i = 0; i < a.length; i++) {   
       if(a[i] != b[i])
      return false;
    }
    return true;
}

export {
  mapInit,
  openBalloon,
  getPlacemarks,
  updateStorage,
  updateBalloon,
  clusterInit,
  arrayCompare
}