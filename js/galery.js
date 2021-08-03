const backButton = document.querySelectorAll('.galery__button.back');
const nextButton =document.querySelectorAll('.galery__button.next');

let galery = document.querySelectorAll('.galery__content');


let listImagesGalery = Array.from(galery);
let images = listImagesGalery.map(item=> item)





// const sizeImage = images[0].getBoundingClientRect().width;
const sizeImage = listImagesGalery[0].children[0].getBoundingClientRect().width;

// images.forEach((item,index) => item.setAttribute('data-size',sizeImage*index))
listImagesGalery.forEach((galery__content)=>{
  Array.from(galery__content.children).forEach((item,index) => item.setAttribute('data-size',sizeImage * index))
})


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




nextButton.forEach( (btn,index) => btn.addEventListener('click',e =>{
  const currentImage = listImagesGalery[index].querySelector('.current-image');
  const nextImage = currentImage.nextElementSibling;

  const imageArray = Array.from(images[index].children)
  
  const nextIndex = imageArray.findIndex(image => image === nextImage);



  moveSlide(listImagesGalery[index],currentImage,nextImage)
  
  hideShowButton(nextButton[index],backButton[index],imageArray,nextIndex)
}))


backButton.forEach( (btn,index) => btn.addEventListener('click',e =>{
  const currentImage = galery[index].querySelector('.current-image');
  const prevImage = currentImage.previousElementSibling;

  const imageArray = Array.from(images[index].children)
 
  const prevIndex = imageArray.findIndex(image => image === prevImage);

  moveSlide(galery[index],currentImage,prevImage)
  hideShowButton(nextButton[index],backButton[index],images[index],prevIndex)
}))




