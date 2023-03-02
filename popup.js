document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('send-requests');
  button.addEventListener('click', () => {
      chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.scripting.executeScript({ 
          target: { 
              tabId: tabs[0].id
          }, 
          files: ["content.js"] ,
      });
      });
  });
});