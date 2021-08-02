const backButton = document.querySelector('.galery__button.back');
const nextButton =document.querySelector('.galery__button.next');

const galery = document.querySelector('.galery__content');
const images = Array.from(galery.children);
const sizeImage = images[0].getBoundingClientRect().width;


images.forEach((item,index) => item.setAttribute('data-size',sizeImage*index))

const hideShowButton = (nextButton,backButton,images,nextIndex) => {
const sizeTotalImages = images.length - 1;
  
  if(nextIndex === sizeTotalImages ){
    backButton.classList.remove('is-hidden');
    nextButton.classList.add('is-hidden');
  }else if(nextIndex === 0){
    backButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
  }else{
    backButton.classList.remove('is-hidden');
    nextButton.classList.remove('is-hidden');
  }
}

const moveSlide = (galery, currentImage, targetImage) => {
  galery.style.transform =`translateX(-${targetImage.dataset.size}px)`;
  currentImage.classList.remove('current-image');
  targetImage.classList.add('current-image');
 
}



nextButton.addEventListener('click',_ =>{
  const currentImage = galery.querySelector('.current-image');
  const nextImage = currentImage.nextElementSibling;
  const nextIndex = images.findIndex(image => image === nextImage);
  
  moveSlide(galery,currentImage,nextImage)
  hideShowButton(nextButton,backButton,images,nextIndex)

})


backButton.addEventListener('click',_ =>{
  const currentImage = galery.querySelector('.current-image');
  const prevImage = currentImage.previousElementSibling;
  const prevIndex = images.findIndex(image => image === prevImage);

  moveSlide(galery,currentImage,prevImage)
  hideShowButton(nextButton,backButton,images,prevIndex)

})


// nextButton.forEach( btn => btn.addEventListener('click',e =>{
//   const currentImage = galery.querySelector('.current-image');
//   const nextImage = currentImage.nextElementSibling;
//   const nextIndex = images.findIndex(image => image === nextImage);
  
//   moveSlide(galery,currentImage,nextImage)
//   hideShowButton(nextButton,backButton,images,nextIndex)
// }))