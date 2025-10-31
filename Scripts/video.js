document.addEventListener('DOMContentLoaded', () => {
  const videoLinks = [
    'https://www.youtube.com/embed/w5pHiqktdvA?autoplay=1&mute=1',
    'https://www.youtube.com/embed/abc123xyz?autoplay=1&mute=1'
  ];

  const videoFrame = document.getElementById('videoFrame');
  let currentIndex = 0;

  function playNextVideo() {
    videoFrame.src = videoLinks[currentIndex];
    currentIndex = (currentIndex + 1) % videoLinks.length;
  }

  playNextVideo();
  setInterval(playNextVideo, 60000);
});