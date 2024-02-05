const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const leftbar = document.querySelector('.left-bar')

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    leftbar.classList.toggle('open');
});