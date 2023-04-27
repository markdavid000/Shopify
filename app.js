const dropdowns = document.querySelectorAll('.dropdown-container');

dropdowns.forEach(dropdown => {
  const toggle = dropdown.querySelector('.dropdown-btn');

  toggle.addEventListener('click', () => {
    dropdown.classList.toggle('active');
  });

  // Close dropdown when clicking outside of it
  document.addEventListener('click', event => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove('active');
    }
  });
});

var video = document.getElementById('myVideo');
var playButton = document.getElementById('playButton');
var pauseButton = document.getElementById('pauseButton');

video.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseButton.style.backgroundImage = 'url(img/pause-solid.svg)';
  } else {
    video.pause();
    playPauseButton.style.backgroundImage = 'url(img/play-button.png)';
  }
});

video.loop = true;

var playPauseButton = document.getElementById('play-pause-button');

playPauseButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseButton.style.backgroundImage = 'url(img/pause-solid.svg)';
  } else {
    video.pause();
    playPauseButton.style.backgroundImage = 'url(img/play-button.png)';
  }
});

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');
const htmlEl = document.querySelector('html');
btnNavEl.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open');
  htmlEl.classList.toggle('nav-open');
});

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', event => {
    // Get the content element associated with the clicked header
    const content = header.nextElementSibling;

    // Toggle the active class on the header and content elements
    header.classList.toggle('active');
    content.classList.toggle('active');

    // If the content element is open, slide it down
    if (content.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      // If the content element is closed, slide it up
      content.style.maxHeight = null;
    }
  });

  // Add transitionend event listener to content element
  const content = header.nextElementSibling;
  content.addEventListener('transitionend', event => {
    // If the content element has just been closed, remove active class
    if (!content.classList.contains('active')) {
      header.classList.remove('active');
    }
  });
});
