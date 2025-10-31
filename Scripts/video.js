const videoLinks = [
  'https://youtu.be/T81BAzcU7Bw',
  'https://youtu.be/w5pHiqktdvA',
];

const videoFrame = document.getElementById('videoFrame');
let currentIndex = 0;

function playNextVideo() {
  videoFrame.src = videoLinks[currentIndex];
  currentIndex = (currentIndex + 1) % videoLinks.length;
}

// Change video every 60 seconds (or adjust as needed)
playNextVideo();
setInterval(playNextVideo, 60000);