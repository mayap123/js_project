// Based on https://jsfiddle.net/macloo/z6mq5x2c/

let divp = document.querySelector('#change');
let image = document.querySelector('img');

//
let text1 = "Move your mouse over the image to see a change";
let text2 = "Now move your mouse out to return the image to its first position.";

image.onmouseenter = (e) => {
	// change image tilt by changing a CSS class
   e.target.classList.remove('rotate-right');
   e.target.classList.add('rotate-left');
   // change text
   divp.textContent = text2;
};
image.onmouseleave = (e) => {
// change image tilt back by changing a CSS class
   e.target.classList.add('rotate-right');
   e.target.classList.remove('rotate-left');
   // change text back
   divp.textContent = text1;
};

// Based on https://jsfiddle.net/macloo/t7zfxsd8/
let secondImage = document.querySelector('#waterfall');

let fall = "images/fallimage.jpg";
let winter = "images/winterimage.jpg";

secondImage.onclick = (e) => {
  if (e.target.getAttribute('src') === (fall)) {
    e.target.setAttribute('src', winter);
  } else {
    e.target.setAttribute('src', fall);
  }
};
