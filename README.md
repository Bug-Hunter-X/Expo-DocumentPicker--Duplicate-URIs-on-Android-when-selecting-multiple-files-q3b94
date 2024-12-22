# Expo DocumentPicker Duplicate URI Bug on Android

This repository demonstrates a bug in Expo's DocumentPicker API on Android where duplicate URIs are returned when selecting multiple files. This can cause unexpected behavior in your application.

## Bug Description
When using `DocumentPicker.getDocumentAsync` to select multiple files on Android, the returned `uri` array may contain duplicate entries. This makes processing the selected files unreliable, leading to potential errors.

## Reproduction
1. Clone this repository.
2. Run the app on an Android device or emulator using Expo Go.
3. Select multiple files using the DocumentPicker.
4. Observe the console output, which will show duplicate URIs.

## Solution
The provided solution utilizes a `Set` to eliminate duplicate URIs before processing the selected files. This ensures that each file is processed only once.