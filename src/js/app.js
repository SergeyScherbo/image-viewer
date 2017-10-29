const gallery    = document.querySelector('.gallery');


gallery.addEventListener('click', function(e) {
  e.preventDefault();

  const shadow          = document.querySelector('.shadow');
  const imageOuter      = document.querySelector('.image');
  const image           = document.querySelector('.image img');
  const closeBtn        = document.querySelector('.shadow__close');
  const previewImgAttr  = e.target.getAttribute('src');

  image.setAttribute('src', previewImgAttr);


  document.body.style.overflowY = 'hidden';
  shadow.classList.add('show');
  imageOuter.classList.add('show');

  shadow.addEventListener('click', function(e) {
    if (e.target.classList.contains('shadow') || e.target.classList.contains('shadow__close')) {
      document.body.style.overflowY = 'auto';
      shadow.classList.remove('show');
      imageOuter.classList.remove('show');
    }
  })
});
