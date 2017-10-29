const gallery    = document.querySelector('.gallery');
const shadow     = document.querySelector('.shadow');
const imageOuter = document.querySelector('.image');
const image      = document.querySelector('.image img');


gallery.addEventListener('click', function(e) {
  e.preventDefault();
  const imagePrev = e.target;
  const imageAttr = imagePrev.getAttribute('src');
  console.log(imageAttr);

  image.setAttribute('src', imageAttr);


  shadow.classList.add('show');
  imageOuter.classList.add('show');

  shadow.addEventListener('click', function(e) {
    if (e.target.classList.contains('shadow')) {
      e.target.classList.remove('show');
      imageOuter.classList.remove('show');
    }
  })
});
