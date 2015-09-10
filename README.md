# SmartphoneSymphony

# Installation

- Install [React Native](http://facebook.github.io/react-native/docs/getting-started.html)
- Clone this repository using Git. [Learn how](http://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository#Cloning-an-Existing-Repository).
- Run `npm install && npm start` from the project root directory in a Terminal emulator
- Open `iOS/SmartphoneSymphony.xcodeproj` in Xcode
- Build and Run the project ensuring the application is still running in Terminal

# Deploy with AppHub

This project is configured to allow test build deployments using [AppHub](https://apphub.io/) as a means to get product in-front of users faster. To use it see the third option in `AppDelegate.m`. When requested from the AppHub dashboard, use [`gym`](https://github.com/fastlane/gym) to export and sign the `ipa` file once the `main.jsbundle` is built with `react-native bundle --minify` (which may need to be moved to the `iOS` directory). Run `gym` from the `iOS` directory as well.
