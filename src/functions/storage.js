import AsyncStorage from '@react-native-async-storage/async-storage';

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
        fs.readFile("../../db/secret.json", function (error, content) {
            var data = JSON.parse(content);
            console.log(error);
        });
        if (data.passwords[username] != null) {
            if (data.passwords[username].pass == token) {
                return true;
            } 
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
        fs.readFile("../../db/secret.json", function (error, content) {
            var data = JSON.parse(content);
            console.log(error);
        });
        if (data.passwords[username] == null) {
            data.passwords[username].pass = password;
            fs.writeFile('../../db/secret.json', JSON.stringify(data), json, 'utf8', callback)
        }
        return false;
    }
    catch (err) {
        console.log(err);
    }   
}


