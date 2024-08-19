const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const leftbar = document.querySelector('.left-bar')
const content = document.querySelector('.content');
var leftcontainer = document.querySelector('.left-container');


if (window.innerWidth >= 600) {
	leftcontainer.style.display = 'block';
}

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    leftbar.classList.toggle('open');

	if (leftbar.classList.contains('open')) {
		content.style.width = '0%';
		setTimeout(function() {
			leftcontainer.style.display = 'block';
		}, 200);
	} else {
		leftcontainer.style.display = 'none';
		content.style.with = '100%';

	}
});

function toggleBox() {
	var overlay = document.getElementById("drop-list");
    var body = document.body;

    if (overlay.style.display === "none" || overlay.style.display === "") {
        overlay.style.display = "block"; // Show overlay
        body.classList.add("overlay-active"); // Prevent background from scrolling
    } else {
        overlay.style.display = "none"; // Hide overlay
        body.classList.remove("overlay-active"); // Allow background to scroll again
    }

}

function toggleBox2() {
	var overlay = document.getElementById("drop-list2");
    var body = document.body;

    if (overlay.style.display === "none" || overlay.style.display === "") {
        overlay.style.display = "block"; // Show overlay
        body.classList.add("overlay-active"); // Prevent background from scrolling
    } else {
        overlay.style.display = "none"; // Hide overlay
        body.classList.remove("overlay-active"); // Allow background to scroll again
    }

}