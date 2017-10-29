'use strict';

var gallery = document.querySelector('.gallery');

gallery.addEventListener('click', function (e) {
  e.preventDefault();
  var image = e.target;

  console.log(image.getAttribute('src'));
});