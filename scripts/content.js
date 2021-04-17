const INTERVAL = 5000;
const vidClassName = "vjs-tech";

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action == "Download") {
    console.log("Detecting the vdieo...");
    const video = document.getElementsByClassName(vidClassName)[0];
    if (video) {
      chrome.runtime.sendMessage({ src: video.src }, function (response) {
        console.info("Response in content: ", response);
      });
    }
  }

  sendResponse();
});
