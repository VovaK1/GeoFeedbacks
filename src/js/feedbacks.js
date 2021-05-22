function newFeedback(coords) {
const obj = {};
const form = document.getElementById('form');
if (form.elements.name.value) {
  obj.name = form.elements.name.value;
}
if (form.elements.place.value) {
  obj.place = form.elements.place.value;
}
if (form.elements.feedback.value) {
  obj.feedback = form.elements.feedback.value;
}
  obj.coords = coords;

if (obj.name && obj.place && obj.feedback) {
  return obj;
} else {
  alert('Заполните все поля!');
  return
}
}

export {
  newFeedback,
}