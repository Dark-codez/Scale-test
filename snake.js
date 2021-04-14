document.querySelector('.bar').addEventListener('click',() => {
	document.querySelector('.bar').classList.toggle('active');
	document.querySelector('.main').classList.toggle('active');
	document.querySelector('.container').classList.toggle('active');
});