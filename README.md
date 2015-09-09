# SmartphoneSymphony

# Deploy with AppHub

This project is configured to allow test build deployments using [AppHub](https://apphub.io/) as a means to get product in-front of users faster. To use it see the third option in `AppDelegate.m`. When requested from the AppHub dashboard, use [`gym`](https://github.com/fastlane/gym to export and sign the `ipa` file once the `main.jsbundle` is built with `react-native bundle --minify` (which may need to be moved to the `iOS` directory). Run `gym` from the `iOS` directory as well.
