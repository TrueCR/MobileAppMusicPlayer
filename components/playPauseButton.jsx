/*
  CPRG303 Phase 4

  Input:
    - The function `playPauseButton` receives two parameters: `play` and `pause`.
      - `play`: Indicates if the play action should be performed.
      - `pause`: Indicates if the pause action should be performed.

  Processing:
    - The code defines a functional component named `playPauseButton`.
    - It uses React and expo-av library for audio playback.
    - The component manages the state for sound and playing status.
    - The function `playPauseButton` checks the input parameters and conditionally defines functions for playing or pausing sound.
    - If `play` is provided, it defines the `playSound` function to load and play audio.
    - If `pause` is provided, it defines the `pauseSound` function to pause the currently playing sound.

  Output:
    - The component doesn't directly render UI. Instead, it defines functions for audio playback based on input parameters.

  Note: 
    - The `playPauseButton` component is designed to be called with specific parameters to control audio playback actions.
    - This version is part of the CPRG304 Phase X project.

  Authors: Tyler Gettle
  Version: 2023-12-07
*/

// Import necessary modules and components from React and expo-av.
import React, { useState } from "react";
import { Audio } from "expo-av";

// Define the functional component named playPauseButton.
const playPauseButton = (play, pause) => {
  // State variables for managing sound and playing status.
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  // Conditionally define the playSound function if 'play' parameter is provided.
  if (play === "play") {
    async function playSound(link) {
      console.log("Loading Sound");
      const { sound } = await Audio.Sound.createAsync(link);
      setSound(sound);

      console.log("Playing Sound");
      await sound.playAsync();
      setIsPlaying(true);
    }
  }

  // Conditionally define the pauseSound function if 'pause' parameter is provided.
  if (pause === "pause") {
    async function pauseSound() {
      if (sound) {
        console.log("Pausing Sound");
        await sound.pauseAsync();
        setIsPlaying(false);
      }
    }
  }
};

// Export the playPauseButton component as the default export.
export default playPauseButton;
