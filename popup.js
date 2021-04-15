function detectVideo() {
  const vidClassName = "vjs-tech";
  const video = document.getElementsByClassName(vidClassName)[0];
  if (video === undefined) return null;
  else return video.src;
}

chrome.scripting.executeScript(
  {
    function: detectVideo,
  },
  (results) => {
    console.log(results);
  }
);
