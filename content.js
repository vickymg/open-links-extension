// Listens for the message that is sent when user clicks the button,
// and executes code once it receives it

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message = "clicked_browser_action") {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);

      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);
