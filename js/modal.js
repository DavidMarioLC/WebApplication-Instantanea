import "./modalSearch.js"
const modal = document.querySelector('.modal');
const  photos = document.querySelectorAll('.tabs-photos img')
const modalImage = document.querySelector('.modal__image');

function mostrarModal(e){
  e.stopPropagation();

  modalImage.src = e.target.src;

  modal.showModal();
}

function hiddeModal(e){

let something = e.target;

if( something === modal){
  modal.close();
}else{
  console.log("no is the modal.")
}

  
}

photos.forEach(photo => photo.addEventListener('click',mostrarModal))
window.addEventListener('click',hiddeModal);