document.addEventListener("DOMContentLoaded", function () {
  const downloadButton = document.getElementById("download");
  downloadButton.addEventListener("click", function () {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { action: "Download" });
    });
    // chrome.runtime.sendMessage(, function (response) {
    //   console.info("Response after Download actions: ", response);
    // });
  });
});
