const gendalf = document.querySelector('.main__info-img');
const counter = document.querySelector('.main__info-counter');

let count = 0;

gendalf.addEventListener('click', () => {
  if (count > 0) {
    counter.classList.remove('main__info-counter--hidden');
  }

  if (gendalf.classList.contains('main__info-img--rotate')) {
    gendalf.classList.remove('main__info-img--rotate');
  } else {
    gendalf.classList.add('main__info-img--rotate');
  }

  count++;
  counter.innerHTML = count;
});

$('.text_view').click(() => {
  $('.main-info__text').slideToggle();
});

$(document).ready(function () {
  $('.my-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
  });
});
Fancybox.bind('[data-fancybox]', {
  dragToClose: false,
  // zoomEffect: false,
});
