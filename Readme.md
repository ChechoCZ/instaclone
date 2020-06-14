# Instagram Clone

Clone of instagram feed using React Native.

This project intends to put in practice basic concepts of React Native.

### Tools
  - React Native v0.62
  - React Navigation 5
  - Styled Components

The reason I used React Navigation was to configure the header of the feed. In the future I may improve this by adding other functionalities such as the search in order to use other types of navigation, such as Tab Navigation and other cool stuf! :).

### Run
Clone this repo, cd into the project directory and run ```yarn``` to install all the dependencies.

  - ##### Backend
  The backend of the app was mocked using [json-server](https://github.com/typicode/json-server). Make sure you have it installed.
  ```sh
  npm install -g json-server
  ```
  Then start the server:
  ```sh
  json-server server.json -p 3333
  ```
  The server will start and will listen in [http://localhost:3333](http://localhost:3333)

  - ##### Android
  Make sure either have your android emulator running or your physical device ready. Then, run:
  ```sh
  yarn react-native run-android
  ```
  When it is done and installed, run:
  ```sh
  yarn start
  ```

  - ##### ios
  Make sure you have cocoa-pods installed. Then, ```cd ios``` and run ```pod install```. Then ```cd ..``` to go back to root directory and run:
  ```sh
  yarn react-native run-ios
  ```

