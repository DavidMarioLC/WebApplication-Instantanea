const $modalStory = document.querySelector('.modalStory');
const $myStory = document.querySelector('#myStory');
const $btnModalClose = document.querySelector('#btnModalClose')
const $video = document.querySelector('.modalStory__video');
const $progress = document.querySelector('.modalStory__progress__item');

 $progress.max += $video.duration*12;

function updateProgress(){
  $progress.value += this.currentTime;
}

function loadedVideo(){
  // $progress.max += this.duration;
  console.log(this.duration)
}

// $video.addEventListener('playing',loadedVideo)
$video.addEventListener('timeupdate',updateProgress)


$myStory.addEventListener('click',e=>{
  $modalStory.showModal()
  $video.play()
})


$btnModalClose.addEventListener('click',e=>{
  $modalStory.close()
  $video.pause()
})
