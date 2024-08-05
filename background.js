let refreshInterval;
let isEnabled = false;

function getRandomNumber(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomInterval(minSec, maxSec, minMillisec, maxMillisec) {
  const randomNumberSec = getRandomNumber(minSec, maxSec);
  const randomNumberMillisec = getRandomNumber(minMillisec, maxMillisec) / 1000;
  return randomNumberSec + randomNumberMillisec;
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    interval: 60,
    isEnabled: false,
    min_sec: 20,
    max_sec: 55,
    min_millisec: 100,
    max_millisec: 800
  });
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'local') {
    if (changes.isEnabled) {
      isEnabled = changes.isEnabled.newValue;
      if (isEnabled) {
        startRefreshing();
      } else {
        clearInterval(refreshInterval);
      }
    }
  }
});

chrome.action.onClicked.addListener((tab) => {
  chrome.storage.local.get(['isEnabled'], (result) => {
    chrome.storage.local.set({ isEnabled: !result.isEnabled });
  });
});

function startRefreshing() {
  chrome.storage.local.get(['min_sec', 'max_sec', 'min_millisec', 'max_millisec', 'interval'], (result) => {
    const { min_sec, max_sec, min_millisec, max_millisec, interval } = result;
    let completeInterval = getRandomInterval(min_sec, max_sec, min_millisec, max_millisec);

    if (completeInterval > interval) {
      completeInterval = interval;
    }

    clearInterval(refreshInterval);
    refreshInterval = setTimeout(() => {
      chrome.tabs.reload(() => {
        startRefreshing();
      });
    console.log(completeInterval)
    }, completeInterval * 1000);
  });
}
