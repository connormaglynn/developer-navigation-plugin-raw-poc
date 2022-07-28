# Developer Navigation Plugin Raw Proof of Concept

This codebase is a proof of concept for a developer navigation plugin from scratch, with no framework.

**The Goal**: To showcase that using a minimalist approach would be enough to develop the Developer Navigation Plugin.

**The Decision**: I will use the Plasmo Framework to create the Developer Navigation Plugin. Creating it from scratch proved more cumbersome. Plasmo provides sensible abstractions, has a better development experience and will be a good introduction into the React Framework for learning and development. The minimalist approach is a good starting point, though the development experience is rather complicated and would take time to get to the point where it is usable and functions as Plasmo does out of the box.

## Running Locally
* Run `npm install` in the root directory.
* Run `npm build` in the root directory.
* Go to `chrome://extensions/`
* click the `Load unpacked` button
* Select the `build` directory for this project
* Enable the plugin
* Go to a GitHub repository
