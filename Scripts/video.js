let player;
const videoLinks = [
  { videoId: 'w5pHiqktdvA' },
  { videoId: 'abc123xyz' }
];
let currentIndex = 0;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('videoFrame', {
    height: '360',
    width: '640',
    videoId: videoLinks[currentIndex].videoId,
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      modestbranding: 1,
      rel: 0
    },
    events: {
      onStateChange: onPlayerStateChange
    }
  });
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    currentIndex = (currentIndex + 1) % videoLinks.length;
    player.loadVideoById(videoLinks[currentIndex].videoId);
  }
}