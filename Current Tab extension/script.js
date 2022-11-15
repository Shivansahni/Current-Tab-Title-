function getCurrentTabTitle() {
  var queryInfo = {
    active: true,
    currentWindow: true,
  };

  chrome.tabs.getSelected(null, function (tab) {
    var title = tab.title;
    var tobj = document.getElementById("title");
    tobj.innerHTML = title;
  });
}

document.querySelector("#title").addEventListener("click", getCurrentTabTitle);
