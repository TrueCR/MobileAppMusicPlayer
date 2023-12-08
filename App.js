/*
  CPRG303 Phase 4

  Input:
    - No explicit input parameters for the main App component.

  Processing:
    - The code sets up a React Native application using the expo framework.
    - It uses the 'react-navigation' library to create a top tab navigator with three screens: Songs, Playlists, and Artists.
    - Each screen is defined by a corresponding function component: SongsScreen, PlaylistScreen, and ArtistsScreen.
    - Various UI components and styles are used to create the layout and appearance of the application.
    - The top tab navigator is customized with styling options for labels, tab items, and tab bar.
    - The main App component also includes a PlayMenu component at the bottom.

  Output:
    - The application renders a tab navigator with three screens: Songs, Playlists, and Artists.
    - Each screen includes specific components such as ShuffleButton, PlaylistButton, RequestPermission, MusicFile, and PlayMenu.
    - The UI is styled using the provided styles.

  Note: 
    - This version is part of the CPRG304 Phase X project.

  Authors: Tyler Gettle
  Version: 2023-12-07
*/

// Import necessary modules and components from React Native and 'react-navigation'.
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ShuffleButton from "./components/shuffleButton";
import PlaylistButton from "./components/playlistButton";
import RequestPermission from "./components/RequestPermission";
import MusicFile from "./components/musicFile";
import PlayMenu from "./components/PlayMenu";

// Function component for the Songs screen.
function SongsScreen() {
  return (
    <View style={styles.container} onLayout={RequestPermission}>
      <View>
        {/* Shuffle button component */}
        <ShuffleButton />
      </View>

      <View style={styles.musicFileView}>
        {/* Scrollable list of music files */}
        <ScrollView>
          <MusicFile />
        </ScrollView>
      </View>
    </View>
  );
}

// Function component for the Playlists screen.
function PlaylistScreen() {
  return (
    <View style={styles.container}>
      <View>
        {/* Playlist button component */}
        <PlaylistButton />
      </View>

      <View style={styles.musicFileView}>
        {/* Scrollable list of playlists */}
        <ScrollView>{/* Placeholder for playlist content */}</ScrollView>
      </View>
    </View>
  );
}

// Function component for the Artists screen.
function ArtistsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.musicFileViewTwo}>
        {/* Scrollable list of artists */}
        <ScrollView>{/* Placeholder for artist content */}</ScrollView>
      </View>
    </View>
  );
}

// Create a top tab navigator using 'createMaterialTopTabNavigator'.
const Tab = createMaterialTopTabNavigator();

// Main App component.
export default function App() {
  return (
    <NavigationContainer>
      {/* Main container for the entire application */}
      <View style={styles.containerTwo}>
        {/* Status bar */}
        <StatusBar style="auto" />

        {/* Top header with application title */}
        <View style={styles.topBorder}>
          <View style={styles.topContainer}>
            <Text style={styles.textTop}>Music Player</Text>
          </View>
        </View>
      </View>

      {/* Tab navigator for Songs, Playlists, and Artists screens */}
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

      {/* Play menu component at the bottom */}
      <PlayMenu />
    </NavigationContainer>
  );
}

// Styles for the UI components.
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
