function volume_sphere() {
    //Write your code here

	const radius = document.querySelector('#radius')
	const volume = document.querySelector('#volume')
	const submitBtn = document.querySelector('#submit')

	submitBtn.addEventListener('click', function () {
		const result = eval(radius.value * radius.value * 3.14)
		volume.value = result
	})

	function cal (e){
		e.preventDefault()
	}
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
