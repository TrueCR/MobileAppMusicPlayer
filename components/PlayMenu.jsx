/*
  CPRG303 Phase 4

  Input:
    - No explicit input mentioned in the code, but the Tracks array likely represents input data.

  Processing:
    - The code defines a functional component named `PlayMenu`.
    - It uses React and React Native libraries for building a mobile application.
    - It utilizes the expo-av library for audio playback.
    - The component manages the state for sound, playing status, and the current track index.
    - Functions are defined for playing, pausing, skipping, and going to the previous song.
    - The component renders a play menu with buttons for play/pause, skip, and previous actions.
    - It includes an image representing the play/pause button.

  Output:
    - The rendered UI includes a play menu with buttons for play/pause, skip, and previous actions.
    - The UI also displays an image representing the play/pause button, which toggles based on the playing status.

  Note: 
    - The `PlayMenu` component is designed to control audio playback and navigate through tracks.
    - This version is part of the CPRG304 Phase X project.

  Authors: Tyler Gettle
  Version: 2023-12-07
*/

// Import necessary modules and components from React Native and Expo libraries.
import React, { useState } from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import Tracks from "./Tracks";
import { Audio } from "expo-av";
import playPauseButton from "./playPauseButton";

// Define the functional component named PlayMenu.
const PlayMenu = () => {
  // State variables for managing sound, playing status, and current track index.
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const pause = "pause";

  // Function to asynchronously load and play the audio from the provided link.
  async function playSound(link) {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(link);
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
    setIsPlaying(true);
  }

  // Function to pause the currently playing sound asynchronously.
  async function pauseSound() {
    if (sound) {
      console.log("Pausing Sound");
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  }

  // Function to stop the currently playing sound, update state, and skip to the next track.
  function skipSong() {
    if (sound) {
      console.log("Skipping Song");
      sound.stopAsync();
      setIsPlaying(false);
      // Circular indexing to go to the next track in the Tracks array.
      setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % Tracks.length);
    }
  }

  // Function to stop the currently playing sound, update state, and go to the previous track.
  function previousSong() {
    if (sound) {
      console.log("Skipping to Previous Song");
      sound.stopAsync();
      setIsPlaying(false);
      // Circular indexing to go to the previous track in the Tracks array.
      setCurrentTrackIndex(
        (prevIndex) => (prevIndex - 1 + Tracks.length) % Tracks.length
      );
    }
  }

  // JSX code for rendering the PlayMenu UI.
  return (
    <View style={styles.playMenuBackground}>
      <View style={styles.PlayMenu}>
        {/* Toggle play/pause button based on the playing status */}
        <TouchableOpacity
          onPress={() => isPlaying && playPauseButton(null, pause)}
        >
          <Image
            source={
              isPlaying
                ? require("./images/icon.png")
                : require("./images/icon.png")
            }
            style={styles.imageStyle}
          />
        </TouchableOpacity>

        {/* Skip to next track button */}
        <TouchableOpacity onPress={skipSong}>
          <Image
            source={require("./images/icon.png")}
            style={styles.imageStyle}
          />
        </TouchableOpacity>

        {/* Skip to previous track button */}
        <TouchableOpacity onPress={previousSong}>
          <Image
            source={require("./images/icon.png")}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles for the PlayMenu UI components.
const styles = StyleSheet.create({
  playMenuBackground: {
    height: 75,
    backgroundColor: "#202B35",
    borderTopWidth: 4,
    borderColor: "white",
  },
  PlayMenu: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  imageStyle: {
    width: 50,
    height: 50,
    marginHorizontal: 15,
  },
});

// Export the PlayMenu component as the default export.
export default PlayMenu;
