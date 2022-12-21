const dates  = document.querySelectorAll('ul.table li')
if(dates) {
    await chrome.scripting.insertCSS({
        files: ["css/focus-mode.css"],
        target: { tabId: getTabId() },
      });
    dates.forEach(function(element) {
        var link = element.getElementsByTagName('a')
        console.log(link)
    })
}
