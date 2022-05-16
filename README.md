# APD-knappen
## Description
Adds a convenience button to the Frånvarotavla:

![The button](https://github.com/FabianIMI/APD-knappen/blob/main/knappen.png?raw=true)

When pressed, the button publishes an APD status for the user with the current date:

![Example](https://github.com/FabianIMI/APD-knappen/blob/main/exempel.png?raw=true)

## Installation

### Chrome users
1. Install the Chrome plugin [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)
2. Click [here](https://github.com/FabianIMI/APD-knappen/raw/main/apd-knappen.user.js)
3. A popup from TamperMonkey will ask you if you want to install the script, so go ahead and accept it
4. Edit the script constants with your name, preferred status and optional message

### Firefox users
1. Install the Firefox plugin  [GreaseMonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey)
2. Click [here](https://github.com/FabianIMI/APD-knappen/raw/main/apd-knappen.user.js)
3. A popup from GreaseMonkey will ask you if you want to install the script, so go ahead and accept it
4. Edit the script constants with your name, preferred status and optional message

## Configuration
After installing, navigate to the Frånvarotavla in your browser.  
Edit the script by clicking the plugin (Tamper/Grease-Monkey) button and selecting the script for editing.  
Change your name under the SETTINGS section and save the changes. If needed you can also change the other settings.

Refresh the Frånvarotavla. Clicking the button should now create a "working from home"-status.

## License

Licensed under MIT License, detailed in full inside the script.
