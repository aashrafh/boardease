chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.src) {
    chrome.downloads.download({ url: message.src }, function (id) {
      console.log("Downloading: ", id);
    });
    console.log("recieved src: ", message.src);
  }

  sendResponse();
});
