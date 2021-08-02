const $btnCarouselPrev = document.querySelector('#btnPrev');
const $btnCarouselNext = document.querySelector('#btnNext');
const $carouselContainer = document.querySelector('.carousel__content');

function carouselNext(){
  $carouselContainer.scrollBy(300,0)
}

function carouselPrev(){
  $carouselContainer.scrollBy(-300,0)
}


$btnCarouselNext.addEventListener('click',carouselNext);
$btnCarouselPrev.addEventListener('click',carouselPrev);