import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TextInput } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const passwords = [
    {
        'name': 'johnny long long',
        'pass': 'ohio'
    },
    {
        'name': 'skibidi sigma',
        'pass': 'sigma'
    },
    {
        'name': 'donald trump',
        'pass': 'elon musk'
    }
]

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login, agent</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>User name</Text>
                <TextInput
                    editable
                    maxLength={40}
                    placeholder='your name / username'
                    autoComplete='off'
                    autoCorrect={false}
                    style={styles.textInput}
                />
            </View>
            <View style={styles.inputContainer}> 
                <Text style={styles.text}>Password</Text>
                <TextInput
                    editable
                    maxLength={40}
                    placeholder='your password'
                    autoComplete='off'
                    autoCorrect={false}
                    secureTextEntry
                    style={styles.textInput}
                />
            </View>
        </View>
    );
}

// navigation.navigate('Details') 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
        backgroundColor: '#f0f8ff', // Cor de fundo da tela
    },
    title: {
        fontSize: 36,
        marginBottom: windowHeight*0.15,
    },
    text: {
        fontSize: 24,
    },
    buttonContainer: {
        backgroundColor: '#add8e6', // Cor de fundo do container do botão
        margin: 10,
        width: windowWidth * 0.5, // 50% da largura da tela
        borderRadius: 5,
    },
    inputContainer: {
        padding: 10,
        backgroundColor: '#add8e6', // Cor de fundo do container do botão
        margin: 10,
        width: windowWidth * 0.8, // 50% da largura da tela
        borderRadius: 5,
    },
    textInput: {
        fontSize: 24,
    }
});