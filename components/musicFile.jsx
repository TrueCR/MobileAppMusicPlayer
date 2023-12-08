/*
  CPRG303 Phase 4

  Input:
    - No explicit input mentioned in the code, but the Tracks array likely represents input data.

  Processing:
    - The code defines a functional component named MusicFile.
    - It uses the React and React Native libraries for building a mobile application.
    - It utilizes the expo-av library for audio playback.
    - The component manages the state for sound, playing status, and the current track index.
    - Functions are defined for playing, pausing, skipping, and going to the previous song.
    - The component renders a list of tracks with associated UI elements.

  Output:
    - The rendered UI includes information about each track, play/pause functionality, skip buttons, and styling.

  Authors: Tyler Gettle
  Version: 2023-12-07
*/

// Import necessary modules and components from React Native and Expo libraries.
import React, { useState } from "react";
import { Text, StyleSheet, Image, View, TouchableOpacity } from "react-native";
import Tracks from "./Tracks"; // Import the array of music tracks.
import { Audio } from "expo-av";

// Define the functional component named MusicFile.
const MusicFile = () => {
  // State variables for managing sound, playing status, and current track index.
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

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

  // JSX code for rendering the UI.
  return (
    <View>
      {/* Map through each track and render UI elements for each. */}
      {Tracks.map((song, index) => (
        <TouchableOpacity
          onPress={() => (isPlaying ? pauseSound() : playSound(song.url))}
        >
          <View key={song.id} style={styles.musicFiles}>
            {/* Display track image */}
            <Image
              source={require("./images/icon.png")}
              style={styles.imageStyle}
            />

            <View style={styles.musicFileDirection}>
              <View>
                {/* Display track title and artist */}
                <Text style={styles.mainTextStyle}>{song.title}</Text>
                <Text style={styles.subTextStyle}>{song.artist}</Text>
              </View>

              {/* Skip to next track button */}
              <TouchableOpacity onPress={skipSong}>
                <Image
                  source={require("./images/icon.png")}
                  style={styles.skipButton}
                />
              </TouchableOpacity>

              {/* Skip to previous track button */}
              <TouchableOpacity onPress={previousSong}>
                <Image
                  source={require("./images/icon.png")}
                  style={styles.skipButton}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// Styles for the UI components.
const styles = StyleSheet.create({
  imageStyle: {
    width: 75,
    height: 75,
  },
  musicFiles: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#202B35",
  },
  mainTextStyle: {
    fontWeight: "bold",
    color: "#E6EBF2",
    fontSize: 13,
    marginLeft: 20,
  },
  subTextStyle: {
    fontWeight: "bold",
    color: "#E6EBF2",
    fontSize: 10,
    marginLeft: 20,
  },
  musicFileDirection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  skipButton: {
    width: 30,
    height: 30,
    marginLeft: 50,
  },
});

// Export the MusicFile component as the default export.
export default MusicFile;
