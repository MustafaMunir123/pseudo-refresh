# <img src="./images/icon.png" alt="Icon" style="width: 25px; vertical-align: middle;"/> Pseudo Refresh 
### Chrome Extension
1. [Overview](#overview)
2. [Features](#features)
3. [Setup](#setup)

## Overview

Pseudo Refresh is a Chrome extension designed to automatically refresh the currently active tab at randomized intervals. This extension allows users to set custom time thresholds for both seconds and milliseconds to ensure a non-patterned refresh rate. It is ideal for users who require continuous updates on a web page without manually refreshing it.

![image](https://github.com/user-attachments/assets/8b460075-c852-4a9a-b7ad-80d3b0951659)

## Features

### Input Parameters

1. **Threshold (seconds)**:
   - This is the maximum time interval in seconds after which the tab should be refreshed if the randomly calculated interval exceeds this value.
   - Default: 60 seconds

2. **Min Seconds**:
   - The minimum number of seconds before the tab refreshes.
   - Default: 20 seconds

3. **Max Seconds**:
   - The maximum number of seconds before the tab refreshes.
   - Default: 55 seconds

### Functionality

- **Randomized Refresh Interval**: The extension uses a combination of minimum and maximum seconds, along with milliseconds, to calculate a random interval for refreshing the tab.
- **Toggle Activation**: Easily enable or disable the auto-refresh feature using the toggle button in the popup interface or use shortcut keys `CTRL+SHIFT+E`
- **Persistent Settings**: All settings are stored locally in Chrome's storage, ensuring your preferences are retained across browser sessions.

## Setup

### Cloning the Repository

1. **Clone the Repository**: Start by cloning the repository to your local machine.
   ```bash
   git clone git@github.com:MustafaMunir123/pseudo-refresh.git
   ```

2. **Navigate to the Directory**: Change to the directory where the extension files are located.
   ```bash
   cd pseudo-refresh
   ```

3. **Ensure You Have the Following Files**:
   - `manifest.json`
   - `background.js`
   - `popup.html`
   - `popup.js`
   - `images/icon.png` (Ensure the image is available in the specified sizes: 16x16, 48x48, and 128x128 pixels)

4. **Load the Extension**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" by toggling the switch at the top right corner of the page.
   - Click on the "Load unpacked" button.
   - Select the directory where the extension files are located.

5. **Using the Extension**:
   - Click on the Pseudo Refresh icon in the Chrome toolbar to open the popup interface.
   - Set your desired refresh intervals and toggle the activation button.
   - The active tab will now refresh at randomized intervals based on your settings.

Enjoy continuous updates on your web pages with Pseudo Refresh!
