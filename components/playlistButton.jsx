import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Alert, View, Image } from 'react-native'

const playlistButton = ({ name, imageLink }) => {
    return (
        <TouchableOpacity onPress={() => Alert.alert('New Playlist Button was Pressed')}>
            <View style={styles.shuffleButton}>
                <Image source={require('./images/playlist_image.png')} style={styles.imageStyle} />
                <Text style={styles.textStyle}>New Playlist</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 45,
        height: 45,
    },
    shuffleButton: {
        flex: 0,
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    textStyle: {
        fontWeight: 'bold',
        color: '#E6EBF2',
        fontSize: 18,
        marginLeft: 20,
    },
});

export default playlistButton