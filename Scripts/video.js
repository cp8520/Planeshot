const videoLinks = [
  'https://youtu.be/T81BAzcU7Bw',
  'https://youtu.be/w5pHiqktdvA',
  'https://assets.churchofjesuschrist.org/c7d7c1a695a111ecb9e7eeeeac1e43a96b7575bc-1080p-en.mp4',
  
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