const $btnModalNext = document.querySelector('.button.modalStory__button.next');
const $modalStory = document.querySelector('.modalStory');
const $btnModalClose = document.querySelector('#btnModalClose');

const $myStory = document.querySelector('#myStory');
const $video = document.querySelector('.modalStory__video');

$modalStory.showModal();
const $progressVideo = document.querySelector('.modalStory__progress__item');

$progressVideo.max = $video.duration;



function showStorie(){
  $modalStory.showModal();
  $video.play();
 
}



function closeStorie(){
  $progressVideo.value = 0;
  $video.currentTime= 0;
  $video.pause();
  $modalStory.close();
}



function nextHistory(){
  $progressVideo.value = 0;
  $video.currentTime= 0;
  $modalStory.close();
  $video.pause();
}

function updateProgress(){
  $progressVideo.value = +this.currentTime;
  if($video.ended){
    $modalStory.close();
  }
  
}

$video.addEventListener('timeupdate',updateProgress);
$myStory.addEventListener('click',showStorie);

$btnModalClose.addEventListener('click',closeStorie);
$btnModalNext.addEventListener('click',nextHistory);
