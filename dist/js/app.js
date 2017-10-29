'use strict';

var gallery = document.querySelector('.gallery');
var shadow = document.querySelector('.shadow');
var imageOuter = document.querySelector('.image');
var image = document.querySelector('.image img');

gallery.addEventListener('click', function (e) {
  e.preventDefault();
  var imagePrev = e.target;
  var imageAttr = imagePrev.getAttribute('src');
  console.log(imageAttr);

  image.setAttribute('src', imageAttr);

  document.body.style.overflowY = 'hidden';
  shadow.classList.add('show');
  imageOuter.classList.add('show');

  shadow.addEventListener('click', function (e) {
    if (e.target.classList.contains('shadow')) {
      document.body.style.overflowY = 'auto';
      e.target.classList.remove('show');
      imageOuter.classList.remove('show');
    }
  });
});