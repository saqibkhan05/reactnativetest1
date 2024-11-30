import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {

    const presshandler = () => {
        navigation.navigate('About');
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home</Text>
            <TouchableOpacity
                onPress={presshandler}
                style={{ padding: 10, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, margin: 10 }}
            >
                <Text>Go To About</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})