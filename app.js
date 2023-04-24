const dropdownBtns = document.querySelectorAll('.dropdown-btn');
const dropdownLists = document.querySelectorAll('.dropdown-list');

dropdownBtns.forEach(function (dropdownBtn, index) {
  dropdownBtn.addEventListener('click', function () {
    if (dropdownLists[index].style.display === 'none') {
      closeAllDropdownLists();
      dropdownLists[index].style.display = 'block';
    } else {
      dropdownLists[index].style.display = 'none';
    }
  });
});

function closeAllDropdownLists() {
  dropdownLists.forEach(function (dropdownList) {
    dropdownList.style.display = 'none';
  });
}

dropdownLists.forEach(function (dropdownList) {
  const options = dropdownList.getElementsByTagName('li');
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', function () {
      const selectedOption = this.innerHTML;
      const dropdownBtn = this.parentNode.parentNode.previousSibling;
      dropdownBtn.innerHTML = selectedOption + " <span class='caret'></span>";
      dropdownList.style.display = 'none';
    });
  }
});

var video = document.getElementById('myVideo');
var playButton = document.getElementById('playButton');
var pauseButton = document.getElementById('pauseButton');

video.addEventListener('click', function () {
  if (video.paused) {
    video.play();
    playPauseButton.style.backgroundImage = 'url(img/pause-solid.svg)';
  } else {
    video.pause();
    playPauseButton.style.backgroundImage = 'url(img/play-solid.svg)';
  }
});

video.loop = true;

var playPauseButton = document.getElementById('play-pause-button');

playPauseButton.addEventListener('click', function () {
  if (video.paused) {
    video.play();
    playPauseButton.style.backgroundImage = 'url(img/pause-solid.svg)';
  } else {
    video.pause();
    playPauseButton.style.backgroundImage = 'url(img/play-solid.svg)';
  }
});

video.addEventListener('play', function () {
  playPauseButton.style.display = 'none';
});

video.addEventListener('pause', function () {
  playPauseButton.style.display = 'block';
});
