/*
  CPRG303 Phase 4

  Input:
    - No explicit input parameters for the `shuffleButton` component.

  Processing:
    - The code defines a functional component named `shuffleButton`.
    - It uses React and React Native libraries for building a mobile application.
    - The component renders a touchable button that, when pressed, triggers an alert.
    - The button displays an image and text, and the onPress event shows an alert indicating the button was pressed.

  Output:
    - The rendered UI includes a touchable button with an image and text.
    - When pressed, an alert is triggered.

  Note: 
    - The `shuffleButton` component is designed to be a reusable UI element for a shuffle button.
    - This version is part of the CPRG304 Phase X project.

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

// Define the functional component named shuffleButton.
const ShuffleButton = () => {
  return (
    <TouchableOpacity onPress={() => Alert.alert("Shuffle Button was Pressed")}>
      <View style={styles.shuffleButton}>
        {/* Display shuffle button image */}
        <Image
          source={require("./images/shuffle_image.png")}
          style={styles.imageStyle}
        />

        {/* Display shuffle button text */}
        <Text style={styles.textStyle}>Shuffle All</Text>
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

// Export the ShuffleButton component as the default export.
export default ShuffleButton;
