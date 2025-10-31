const videoLinks = [
  'https://youtu.be/T81BAzcU7Bw',
  'https://youtu.be/w5pHiqktdvA',
  'https://www.churchofjesuschrist.org/media/video/2022-02-0001-your-memories-can-live-forever-on-familysearch?lang=eng'
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