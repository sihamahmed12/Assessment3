console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submited successfully');
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let duckphoto = document.querySelector(img)

addEventListener('mouseover', (event) => {
	event.target.style.img = "duck"
})