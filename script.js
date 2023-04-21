function volume_sphere() {
const radius = document.querySelector('#radius');
const volume = document.querySelector('#volume');
const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', function (event) {
event.preventDefault();
const r = parseFloat(radius.value);
const result = (4 / 3) Math.PI Math.pow(r, 3);
volume.value = result;
});
}

window.onload = volume_sphere;