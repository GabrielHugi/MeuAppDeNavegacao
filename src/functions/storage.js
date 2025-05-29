import AsyncStorage from '@react-native-async-storage/async-storage';

async function checkIsLoggedIn() {
    try {
        const token = await AsyncStorage.getItem('token')
        if (token == null) return 1;
        // verify
        return 0;
    }
    catch (err) {
        console.log("hey bro it looks like your code sucks", err);
    }
}

async function saveLogin(info) {
    try {
        const token = info.pass;
        token += "."
        token = goofyEncrypt(info.pass);
        await AsyncStorage.setItem("token", token);
    }
    catch (err) {
        console.log("hey bro it looks like your code sucks", err);
    }
}

function goofyEncrypt(info) {
    let string = '';
    let pos = 0;
    for (let i = 0; i < info.lenght; i++) {
        for (let i2 = 0; i2 < info[i].lenght; i2++) {
            info[i][i2] += 11;
            if (info[i][i2] > 255) info[i][i2] -= 223
            string[pos] = info[i][i2];
            pos++;
        }
    }
    return string;
}


