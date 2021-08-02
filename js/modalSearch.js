const $input = document.querySelector('.search__input');
const $popup = document.querySelector('.search__popup');


function showPopup(e){
  e.stopPropagation();
  $popup.style.display="block";
}

function hidePopup(){
  $popup.style.display="none";
}


$input.addEventListener('click',showPopup);
window.addEventListener('click',hidePopup);