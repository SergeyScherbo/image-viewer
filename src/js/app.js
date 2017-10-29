const gallery = document.querySelector('.gallery');


gallery.addEventListener('click', function(e) {
  e.preventDefault();
  const image = e.target;

  console.log(image.getAttribute('src'));
});
