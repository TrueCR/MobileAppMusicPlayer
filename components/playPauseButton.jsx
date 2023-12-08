import React, { useState } from 'react';
import { Audio } from 'expo-av';

const playPauseButton = (play, pause) => {
    const [sound, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    
    if(play == 'play') {
        async function playSound(link) {
            console.log('Loading Sound');
            const { sound } = await Audio.Sound.createAsync(link);
            setSound(sound);
        
            console.log('Playing Sound');
            await sound.playAsync();
            setIsPlaying(true);
          }
    } if(pause == 'pause') {
        async function pauseSound() {
            if (sound) {
              console.log('Pausing Sound');
              await sound.pauseAsync();
              setIsPlaying(false);
            }
          }
    }
}

export default playPauseButton