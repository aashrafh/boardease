const INTERVAL = 5000;
const vidClassName = "vjs-tech";

window.setInterval(function () {
  console.log("Detecting the vdieo...");
  const video = document.getElementsByClassName(vidClassName)[0];
  if (video) {
    chrome.runtime.sendMessage({ src: video.src }, function (response) {});
  }
}, INTERVAL);
