import React, { useState } from 'react';
import { Text, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import Tracks from './Tracks';
import { Audio } from 'expo-av';

const MusicFile = () => {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  async function playSound(link) {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(link);
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
    setIsPlaying(true);
  }

  async function pauseSound() {
    if (sound) {
      console.log('Pausing Sound');
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  }

  function skipSong() {
    if (sound) {
      console.log('Skipping Song');
      sound.stopAsync();
      setIsPlaying(false);

      setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % Tracks.length);
    }
  }

  function previousSong() {
    if (sound) {
      console.log('Skipping to Previous Song');
      sound.stopAsync();
      setIsPlaying(false);

setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + Tracks.length) % Tracks.length);
    }
  }


  return (
    <View>
      {Tracks.map((song, index) => (
        <TouchableOpacity onPress={() => (isPlaying ? pauseSound() : playSound(song.url))}>
        <View key={song.id} style={styles.musicFiles}>
          <Image source={require('./images/icon.png')} style={styles.imageStyle} />
          <View style={styles.musicFileDirection}>
            <View>
              <Text style={styles.mainTextStyle}>{song.title}</Text>
              <Text style={styles.subTextStyle}>{song.artist}</Text>
            </View>
            <TouchableOpacity onPress={skipSong}>
              <Image source={require('./images/icon.png')} style={styles.skipButton} />
            </TouchableOpacity>
            <TouchableOpacity onPress={previousSong}>
              <Image source={require('./images/icon.png')} style={styles.skipButton} />
            </TouchableOpacity>

          </View>
        </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 75,
    height: 75,
  },
  musicFiles: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#202B35',
  },
  
  mainTextStyle: {
    fontWeight: 'bold',
    color: '#E6EBF2',
    fontSize: 13,
    marginLeft: 20,
  },
  subTextStyle: {
    fontWeight: 'bold',
    color: '#E6EBF2',
    fontSize: 10,
    marginLeft: 20,
  },
  musicFileDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skipButton: {
    width: 30,
    height: 30,
    marginLeft: 50,
  },
});

export default MusicFile;