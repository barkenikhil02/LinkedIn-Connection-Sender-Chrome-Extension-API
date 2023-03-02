function sendConnectionRequest(id) {
  // debugger
const accessToken = 'AQWrUDEpEuoIrh1_0gcPqOPhTpNKJ3rkryPtJT1RPQTAakEXbwTQh73EEwwI-FmdhAg-3HmqkALyAne0Jr7vlBuKHNeE5tiIx4c_IRkuqovZ74TKbLgufN99q8nCBo0mso2dOQTZJKwfSJc_QDakBqibexPpfqPnJAjhNmeFC9VR0gH9Na2JVVeDRcj5xDyT02SF48iIoyGQGZ-kK-khm7qR6OzRMA_1lO4fA1G1rcJlzy0qpuwhwWn2qwIFoc7ndarv1-IQCZpY-dRGcFQZJbrSww5JOXnToJtVQrbCwkRx1aDCbzhU1ZtHQdx_1rKWPPhH1Xi7zhwcddWS_7In30aMDPf3Lg'; // replace with your LinkedIn API access token

fetch(`https://api.linkedin.com/v2/invitations`, {
  method: 'POST',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`,
    'x-li-format': 'json'
  },
  body: JSON.stringify({
    invitee: {
      'com.linkedin.voyager.relationships.invitation.InviteeProfile': {
        profileId: id
      }
    },
    message: 'Hello, I would like to connect with you on LinkedIn.'
  })
}).then(response => {
  if (response.ok) {
    console.log("Connection request sent successfully");
  } else {
    console.error("Failed to send connection request");
  }
}).catch(error => {
  console.error("Error sending connection request:", error);
});
}


function handleSearchResults() {
    // debugger
//   const results = document.querySelectorAll('li.search-result__occluded-item');
const results = document.querySelectorAll('li.reusable-search__result-container');
  results.forEach(result => {
    // debugger;
      const idElement = result.querySelector('a.app-aware-link ');
      if (idElement) {
          const id = idElement.href.match(/\/in\/([a-zA-Z0-9\-]+)/)[1];
          console.log(id)
          sendConnectionRequest(id);
      }
  });
}

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === 'sendConnectionRequests') {
//       handleSearchResults();
//   }
// });

(async () => {
    // debugger;
    console.log("Started")
    await handleSearchResults();
  })();