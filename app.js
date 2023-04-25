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
    playPauseButton.style.backgroundImage = 'url(img/play-button.png)';
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
    playPauseButton.style.backgroundImage = 'url(img/play-button.png)';
  }
});

video.addEventListener('play', function () {
  playPauseButton.style.visibility = 'hidden';
});

video.addEventListener('pause', function () {
  playPauseButton.style.visibility = 'visible';
});

// // Get the canvas element
// const canvas = document.getElementById('canvas');

// // Set the canvas dimensions
// canvas.width = 800;
// canvas.height = 600;

// // Load the image of the earth
// const earth_image = new Image();
// earth_image.src = 'img/earth.png';
// earth_image.onload = function () {
//   // Draw the earth image on the canvas once it has loaded
//   canvas
//     .getContext('2d')
//     .drawImage(earth_image, 0, 0, canvas.width, canvas.height);
// };

// // Set the initial position and velocity of the orbiting line
// let line_pos = [400, 300];
// let line_vel = [Math.random() * 2 - 1, Math.random() * 2 - 1];

// // Set up the animation loop
// function animate() {
//   // Update the position of the orbiting line
//   line_pos[0] += line_vel[0];
//   line_pos[1] += line_vel[1];

//   // Check if the line intersects with the earth
//   if (
//     line_pos[0] > 0 &&
//     line_pos[0] < 800 &&
//     line_pos[1] > 0 &&
//     line_pos[1] < 600
//   ) {
//     const earth_data = canvas
//       .getContext('2d')
//       .getImageData(line_pos[0], line_pos[1], 1, 1).data;
//     if (earth_data[0] === 0 && earth_data[1] === 0 && earth_data[2] === 255) {
//       line_vel = [Math.random() * 2 - 1, Math.random() * 2 - 1];
//     }
//   }

//   // Clear the canvas
//   canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

//   // Draw the earth and the orbiting line
//   canvas
//     .getContext('2d')
//     .drawImage(earth_image, 0, 0, canvas.width, canvas.height);
//   canvas.getContext('2d').beginPath();
//   canvas.getContext('2d').moveTo(line_pos[0], line_pos[1]);
//   canvas.getContext('2d').lineTo(400, 300);
//   canvas.getContext('2d').stroke();

//   // Repeat the animation loop
//   requestAnimationFrame(animate);
// }

// // Start the animation loop
// animate();
