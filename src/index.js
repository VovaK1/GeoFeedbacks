import { mapInit } from './js/ymaps'
import './styles/main.scss'



const promiseMap = new Promise((resolve) => 
{
const myMap = ymaps.ready(mapInit);
  resolve(myMap);
})
promiseMap.then((map) => console.log('map loaded:', map))



