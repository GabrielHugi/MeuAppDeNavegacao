import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TextInput } from 'react-native';
import {checkIsLoggedIn, checkIsTokenValid, saveCreds} from "../functions/storage.js";
import secret from '../../db/secret.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomeScreen({ navigation }) {
    async function isLoggedIn() {
        if (await checkIsLoggedIn() == true && await checkIsTokenValid() == true) navigation.navigate('Home');
    }
    isLoggedIn();

    const [username, setUsername] = useState("e");
    const [password, setPassword] = useState("d");
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login, agent</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>User name</Text>
                <TextInput
                    id='TextInputName'
                    editable
                    maxLength={40}
                    placeholder='your name / username'
                    autoComplete='off'
                    autoCorrect={false}
                    style={styles.textInput}
                    onChangeText={(value) => setUsername(value)}
                />
            </View>
            <View style={styles.inputContainer}> 
                <Text style={styles.text}>Password</Text>
                <TextInput
                    id='TextInputPass'
                    editable
                    maxLength={40}
                    placeholder='your password'
                    autoComplete='off'
                    autoCorrect={false}
                    secureTextEntry
                    style={styles.textInput}
                    onChangeText={(value) => setPassword(value)}
                />
            </View>
            <View                 
                style=
                    {
                        {
                        borderStyle: "solid",
                        borderRadius: 4,
                        borderWidth: 2,
                        borderColor:"#393939",
                        }
                    }>
                <Button
                    onPress={async () => {
                            await saveCreds(username, password);
                            if (await checkIsTokenValid() == true) {
                                navigation.navigate('Home');                
                            }
                        }
                    }
                    title="Submit"
                    color= "#6c6c6c"
                    borderRadius= "0"
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
    inputContainer: {
        padding: 10,
        backgroundColor:"#dbf6ff", // Cor de fundo do container do botão
        margin: 10,
        width: windowWidth * 0.8, // 50% da largura da tela
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#000000"
    },
    textInput: {
        fontSize: 24,
    }
});