  var slideIndex = 1;
  var millis = 1000;

  nextSlide();
  var interval = setInterval(nextSlide, millis);

  function nextSlide() {
    showSlide();
    slideIndex++;
  }
  function showSlide() {
    var i;
    var slides = document.getElementsByClassName("adv-image");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    if (slideIndex < 1) {
      slideIndex = slides.length;
    }
    slides[slideIndex - 1].style.display = "block";
  }