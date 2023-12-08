const [sound, setSound] = useState();
const [isPlaying, setIsPlaying] = useState(false);
const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

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

export default previousSong;
