function setupVideo(video) {
  const button = video.querySelector('.video__button');
  const overlay = video.querySelector('.video__overlay');
  const link = document.querySelector('.video__link');
  const YOUTUBE_ID = link.href.slice(32);

  video.addEventListener('click', () => {
    const iframe = createIframe(YOUTUBE_ID);
    link.remove();
    button.remove();
    overlay.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('video--enabled');
}

function createIframe(ytId) {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', `https://www.youtube.com/embed/${ytId}?controls=0?rel=0&showinfo=0&autoplay=1`);
  iframe.classList.add('video__media');
  return iframe;
}

export function initVideo() {
  const videos = document.querySelectorAll('.video__wrapper');
  videos.forEach(setupVideo);
}
