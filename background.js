const HUE_ENDPOINT = "";

const MEETING_PLATFORMS = [
  "meet.google.com",
  "zoom.us",
  "teams.microsoft.com",
  // Add more platforms as needed
];

// Object to keep track of tabs
let tabs = {};

const changeLightState = (on) => {
  fetch(HUE_ENDPOINT, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(on),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error(error);
    });
};

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Check if the tab is navigating to a meeting platform
  if (
    tab.url &&
    MEETING_PLATFORMS.some((pattern) => tab.url.includes(pattern))
  ) {
    // The tab has navigated to one of the meeting platforms
    tabs[tabId] = true;
    changeLightState({ on: true });
  } else if (tabs[tabId] && changeInfo.url) {
    // The tab has navigated away from the meeting platform
    // Remove it from our tracker
    delete tabs[tabId];
  }
});

chrome.tabs.onRemoved.addListener((tabId) => {
  if (tabs[tabId]) {
    // The tab was closed
    changeLightState({ on: false });
    // Clean up our tracker
    delete tabs[tabId];
  }
});
