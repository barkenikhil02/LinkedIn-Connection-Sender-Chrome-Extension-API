chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.method == "connectAll") {
        connectAll();
        sendResponse({result: "Connecting with all connections..."});
      }
    }
  );
  
  async function connectAll() {
    var connections = document.querySelectorAll(".search-result__actions--primary button[aria-label='Connect']");
    for (var i = 0; i < connections.length; i++) {
      await sleep(500);
      connections[i].click();
      await sleep(500);
      var send = document.querySelector(".ml1 button[aria-label='Send now']");
      send.click();
    }
  }
  
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }