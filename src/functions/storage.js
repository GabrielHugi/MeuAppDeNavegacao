import AsyncStorage from '@react-native-async-storage/async-storage';
import secret from '../../db/secret.json';
import 'expo-file-system';

async function checkIsLoggedIn() {
    try {
        const token = await AsyncStorage.getItem('token')
        if (token == null) return false;
        return true;
    }
    catch (err) {
        console.log("hey bro it looks like your code sucks", err);
    }
}

async function checkIsTokenValid() {
    try {
        const token = await AsyncStorage.getItem('token');
        const username = await AsyncStorage.getItem('username');
        if (token == null || username == null) return false;
        if (secret.passwords[username] != null) {
            if (secret.passwords[username].pass == token) return true;
        }
        return false;
    }
    catch (err) {
        console.log(err);
    }
}

async function saveCreds(username, password) {
    try {
        await AsyncStorage.setItem('token', password);
        await AsyncStorage.setItem('username', username);
    }
    catch (err) {
        console.log(err);
    }   
}

export { checkIsLoggedIn, checkIsTokenValid, saveCreds };