var myMap;
const form = `
<div id="feedback">
  <div id="heading">Отзыв:</div>
  <form action="" id="form">
    <input type="text" name="name" id="input-name" placeholder="Укажите ваше имя">
    <input type="text" name="place" id="input-place" placeholder="Укажите место">
    <textarea name="feedback" id="input-feedback" placeholder="Оставить отзыв"></textarea>
    <button id="button">Добавить</button>
  </form>
</div>`

 function mapInit() {
     myMap = ymaps.ready(() => {
     myMap = new ymaps.Map('map', {
      center: [59.91, 30.3],
      zoom: 10,
      controls: ['zoomControl'],
      behaviors: ['drag'],
    })

     myMap.events.add('click', e => {
       myMap.balloon.open(e.get('coords'), form)
     }) 
  })

  return myMap;
}


export {
  mapInit
}