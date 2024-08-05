document.getElementById('save').addEventListener('click', () => {
    const interval = parseInt(document.getElementById('interval').value);
    const minSec = parseInt(document.getElementById('min_sec').value);
    const maxSec = parseInt(document.getElementById('max_sec').value);
    
    if (interval > 0 && minSec > 0 && maxSec > 0 && minSec <= maxSec) {
      chrome.storage.local.set({ interval, min_sec: minSec, max_sec: maxSec });
    }
  });
  
  document.getElementById('toggle').addEventListener('click', () => {
    chrome.storage.local.get(['isEnabled'], (result) => {
      chrome.storage.local.set({ isEnabled: !result.isEnabled });
    });
  });
  
  chrome.storage.local.get(['interval', 'min_sec', 'max_sec', 'isEnabled'], (result) => {
    document.getElementById('interval').value = result.interval || 60;
    document.getElementById('min_sec').value = result.min_sec || 20;
    document.getElementById('max_sec').value = result.max_sec || 55;
    updateToggleButton(result.isEnabled);
  });
  
  function updateToggleButton(isEnabled) {
    const toggleButton = document.getElementById('toggle');
    if (isEnabled) {
      toggleButton.textContent = 'Disable';
    } else {
      toggleButton.textContent = 'Enable';
    }
  }
  
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'local' && changes.isEnabled) {
      updateToggleButton(changes.isEnabled.newValue);
    }
  });
  