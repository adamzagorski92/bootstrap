const myCarouselElement = document.querySelector('#carouselExampleDark')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 500,
  ride: 'carousel',
  touch: false
});