function findVideos() {
  let videos = document.querySelectorAll(".video__wrapper");

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let button = video.querySelector(".video__button");
  let overlay = video.querySelector(".video__overlay");
  let link = document.querySelector(".video__link");

  video.addEventListener("click", () => {
    let iframe = createIframe();
    link.remove();
    button.remove();
    overlay.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute("href");
  video.classList.add("video--enabled");
}

function createIframe() {
  let iframe = document.createElement("iframe");

  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("allow", "autoplay");
  iframe.setAttribute("src", generateURL());
  iframe.classList.add("video__media");
  return iframe;
}

function generateURL() {
  let query = "?rel=0&showinfo=0&autoplay=1";
  return "https://www.youtube.com/embed/9TZXsZItgdw?controls=0" + query;
}
export function initVideo() {
  findVideos();
}
