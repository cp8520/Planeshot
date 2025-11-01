document.addEventListener('DOMContentLoaded', () => {
  const videoSources = [
    { type: 'mp4', url: 'videos/YourStoreWorthRemembering.mp4' },
    { type: 'mp4', url: 'videos/YourMemoriesCanLiveForever.mp4' },
    { type: 'youtube', url: 'https://www.youtube.com/embed/w5pHiqktdvA' },
    { type: 'youtube', url: 'https://www.youtube.com/embed/-cV-2HXWrqE' },
    { type: 'mp4', url: 'videos/FamilySearchFamilyTree.mp4' },
    { type: 'youtube', url: 'https://www.youtube.com/embed/oli9PKdWDBQ' },
    { type: 'youtube', url: 'https://www.youtube.com/embed/We5gk04S5p8' },
    { type: 'mp4', url: 'videos/FamilySearchHelpResources.mp4' },

  ];

  const youtubeFrame = document.getElementById('youtubeFrame');
  const mp4Player = document.getElementById('mp4Player');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentIndex = 0;
  let timeoutId = null;

  function clearTimers() {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    mp4Player.onended = null;
  }

  function playVideo(index) {
    clearTimers();
    const current = videoSources[index];

    if (current.type === 'youtube') {
      mp4Player.pause();
      mp4Player.style.display = 'none';
      youtubeFrame.src = current.url;
      youtubeFrame.style.display = 'block';

      timeoutId = setTimeout(() => {
        nextVideo();
      }, 60000); // fallback duration for YouTube

    } else if (current.type === 'mp4') {
      youtubeFrame.src = '';
      youtubeFrame.style.display = 'none';
      mp4Player.src = current.url;
      mp4Player.style.display = 'block';
      mp4Player.play();

      mp4Player.onended = () => {
        nextVideo();
      };
    }
  }

  function nextVideo() {
    currentIndex = (currentIndex + 1) % videoSources.length;
    playVideo(currentIndex);
  }

  function prevVideo() {
    currentIndex = (currentIndex - 1 + videoSources.length) % videoSources.length;
    playVideo(currentIndex);
  }

  nextBtn.addEventListener('click', nextVideo);
  prevBtn.addEventListener('click', prevVideo);

  playVideo(currentIndex);
});