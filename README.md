# Scheduler App

Meeting room scheduling application build with React Native

Note: App will run on light mode friendly manner in dark mode enabled devices.

## Pre-requisites

- XCode need to be installed
- Node 16 or higher
- Android studio need to be installed
- View home screen, emulator can be used
- Scan QR code, need an actual device

## How to run

`npm start` will start metro server

### Android

`npx react-native run-android` will start android app

*Issues*
If you came across of `Task :app:validateSigningDebug FAILED`, Try running `keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000` in `android/app/` or use *debug.keystore* file you have 

### iOS

`npx react-native run-ios` will start ios app
For apple-chip set use rosseta enabled emulator

#### XCode

Run and start the app using `play` button.
Note: If you are using apple chip-set use rosseta iOS emulator

## Tests

`npm test` will run the test casess
