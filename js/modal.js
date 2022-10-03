let imagenes = document.querySelectorAll('.gallery__img');
let modal = document.querySelector('#modal');
let img = document.querySelector('#modal__img');
let boton = document.querySelector('#modal__boton');

for (let i = 0; i < imagenes.length; i+=1){
	imagenes[i].addEventListener('click', function(e){
		modal.classList.toggle.apply("modal--open");
		let src = e.target.src;
		img.setAttribute("src", src);
	});
}