import React, { useState } from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import Tracks from "./Tracks";
import { Audio } from "expo-av";
import playPauseButton from "./playPauseButton";

const PlayMenu = () => {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const pause = "pause";

  async function playSound(link) {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(link);
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
    setIsPlaying(true);
  }

  async function pauseSound() {
    if (sound) {
      console.log("Pausing Sound");
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  }

  function skipSong() {
    if (sound) {
      console.log("Skipping Song");
      sound.stopAsync();
      setIsPlaying(false);
      setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % Tracks.length);
    }
  }

  function previousSong() {
    if (sound) {
      console.log("Skipping to Previous Song");
      sound.stopAsync();
      setIsPlaying(false);

      setCurrentTrackIndex(
        (prevIndex) => (prevIndex - 1 + Tracks.length) % Tracks.length
      );
    }
  }

  return (
    <View style={styles.playMenuBackground}>
        <View style={styles.PlayMenu}>
        <TouchableOpacity onPress={() => isPlaying && playPauseButton(null, pause)}>
        <Image
          source={
            isPlaying
              ? require("./images/icon.png")
              : require("./images/icon.png")
          }
          style={styles.imageStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={skipSong}>
        <Image
          source={require("./images/icon.png")}
          style={styles.imageStyle}
        />
      </TouchableOpacity>
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

const styles = StyleSheet.create({
  playMenuBackground: {
    height: 75,
    backgroundColor: "#202B35",
    borderTopWidth: 4,
    borderColor: "white",
  },
  PlayMenu: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  imageStyle: {
    width: 50,
    height: 50,
    marginHorizontal: 15,
    },
});

export default PlayMenu;
