'use strict';

var gallery = document.querySelector('.gallery');

gallery.addEventListener('click', function (e) {
  e.preventDefault();

  var shadow = document.querySelector('.shadow');
  var imageOuter = document.querySelector('.image');
  var image = document.querySelector('.image img');
  var closeBtn = document.querySelector('.shadow__close');
  var previewImgAttr = e.target.getAttribute('src');

  image.setAttribute('src', previewImgAttr);

  document.body.style.overflowY = 'hidden';
  shadow.classList.add('show');
  imageOuter.classList.add('show');

  shadow.addEventListener('click', function (e) {
    if (e.target.classList.contains('shadow') || e.target.classList.contains('shadow__close')) {
      document.body.style.overflowY = 'auto';
      shadow.classList.remove('show');
      imageOuter.classList.remove('show');
    }
  });
});