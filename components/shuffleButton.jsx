import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Alert, View, Image } from 'react-native'

const shuffleButton = () => {
    return (
        <TouchableOpacity onPress={() => Alert.alert('Shuffle Button was Pressed')}>
            <View style={styles.shuffleButton}>
                <Image source={require('./images/shuffle_image.png')} style={styles.imageStyle} />
                <Text style={styles.textStyle}>Shuffle All</Text>
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

export default shuffleButton