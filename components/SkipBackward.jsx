/*
  CPRG303 Phase 4

  Input:
    - No explicit input parameters for the `previousSong` function.

  Processing:
    - The code defines a React functional component that uses the `useState` hook to manage state variables.
    - The state variables include `sound` (for managing audio playback), `isPlaying` (for tracking playing status), and `currentTrackIndex` (for tracking the index of the currently playing track).
    - The function `previousSong` is defined to handle the action of skipping to the previous song.
    - Inside the function, it checks if there is a currently playing sound and stops it using `sound.stopAsync()`.
    - It sets `isPlaying` to `false` and updates the `currentTrackIndex` to the index of the previous track in a circular manner.

  Output:
    - The `previousSong` function is designed to be used to handle the action of skipping to the previous song.
    - This version is part of the CPRG304 Phase X project.

  Note: 
    - The use of the `useState` hook indicates that this code is part of a React functional component.
    - It is expected that this code is used in conjunction with other components and functions for a music player application.

  Authors: Tyler Gettle
  Version: 2023-12-07
*/
import { useState } from "react";
import Tracks from "./Tracks";

// State variables for managing sound, playing status, and current track index.
const [sound, setSound] = useState();
const [isPlaying, setIsPlaying] = useState(false);
const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

// Function to handle skipping to the previous song.
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

// Export the previousSong function as the default export.
export default previousSong;
