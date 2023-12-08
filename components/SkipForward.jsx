import React, { useState } from 'react';
import Tracks from './Tracks';

function skipSong() {
    const [sound, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

    if (sound) {
      console.log("Skipping Song");
      sound.stopAsync();
      setIsPlaying(false);

      setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % Tracks.length);
    }
  }

export default skipSong;