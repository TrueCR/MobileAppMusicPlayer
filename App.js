import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ShuffleButton from "./components/shuffleButton";
import PlaylistButton from "./components/playlistButton";
import RequestPermission from "./components/RequestPermission";
import MusicFile from "./components/musicFile";
import PlayMenu from "./components/PlayMenu";

function SongsScreen() {
  return (
    <View style={styles.container} onLayout={RequestPermission}>
      <View>
        <ShuffleButton />
      </View>

      <View style={styles.musicFileView}>
        <ScrollView>
          <MusicFile />
        </ScrollView>
      </View>
    </View>
  );
}

function PlaylistScreen() {
  return (
    <View style={styles.container}>
      <View>
        <PlaylistButton />
      </View>

      <View style={styles.musicFileView}>
        <ScrollView>
        </ScrollView>
      </View>
    </View>
  );
}

function ArtistsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.musicFileViewTwo}>
        <ScrollView>
        </ScrollView>
      </View>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.containerTwo}>
        <StatusBar style="auto" />
        <View style={styles.topBorder}>
          <View style={styles.topContainer}>
            <Text style={styles.textTop}>Music Player</Text>
          </View>
        </View>
      </View>

      <Tab.Navigator
        screenOptions={{
          swipeEnabled: true,
          tabBarLabelStyle: { fontSize: 15 },
          tabBarItemStyle: { height: 50 },
          tabBarStyle: { backgroundColor: "#202B35" },
          tabBarActiveTintColor: "#FF7A00",
          tabBarInactiveTintColor: "#838990",
        }}
      >
        <Tab.Screen name="Songs" component={SongsScreen} />
        <Tab.Screen name="Playlists" component={PlaylistScreen} />
        <Tab.Screen name="Artists" component={ArtistsScreen} />
      </Tab.Navigator>
      <PlayMenu />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121a21",
  },
  containerTwo: {
    backgroundColor: "#202B35",
  },
  topContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textTop: {
    fontWeight: "bold",
    color: "#E6EBF2",
    fontSize: 20,
  },
  topBorder: {
    paddingBottom: 15,
    borderBottomColor: "#E6EBF2",
    borderBottomWidth: 3,
  },
  settingsButtonStyles: {
    flexDirection: "row",
    alignItems: "center",
  },
  musicFileView: {
    marginBottom: 95,
  },
  musicFileViewTwo: {
    marginTop: 10,
    marginBottom: 20,
  },
});
