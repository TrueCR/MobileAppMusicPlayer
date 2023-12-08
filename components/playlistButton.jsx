/*
  CPRG303 Phase 4

  Input:
    - The component receives props: `name` (playlist name) and `imageLink` (link to playlist image).

  Processing:
    - The code defines a functional component named `playlistButton`.
    - It uses React and React Native libraries for building a mobile application.
    - The component renders a touchable button that, when pressed, triggers an alert.
    - The button displays an image and text, and the onPress event shows an alert indicating the button was pressed.

  Output:
    - The rendered UI includes a touchable button with an image and text.
    - When pressed, an alert is triggered.

  Note: 
    - The `playlistButton` component is designed to be reusable with different playlist names and image links.

  Authors: Tyler Gettle
  Version: 2023-12-07
*/

// Import necessary modules and components from React Native.
import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  View,
  Image,
} from "react-native";

// Define the functional component named playlistButton.
const PlaylistButton = ({ name, imageLink }) => {
  return (
    <TouchableOpacity
      onPress={() => Alert.alert("New Playlist Button was Pressed")}
    >
      <View style={styles.shuffleButton}>
        {/* Display playlist image */}
        <Image
          source={require("./images/playlist_image.png")}
          style={styles.imageStyle}
        />

        {/* Display playlist name */}
        <Text style={styles.textStyle}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Styles for the UI components.
const styles = StyleSheet.create({
  imageStyle: {
    width: 45,
    height: 45,
  },
  shuffleButton: {
    flex: 0,
    flexDirection: "row",
    marginLeft: 20,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  textStyle: {
    fontWeight: "bold",
    color: "#E6EBF2",
    fontSize: 18,
    marginLeft: 20,
  },
});

// Export the PlaylistButton component as the default export.
export default PlaylistButton;
