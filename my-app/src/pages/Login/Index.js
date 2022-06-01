import React from 'react';
import { signInWithEmailAndPassword } from '@firebase/auth'
import { firebaseAuth } from '../../config/firebaseConfig'
import { useState, useEffect } from 'react';
import {
    Text, 
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'
import { Platform } from 'react-native';

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState("");

    const loginFirebase = () => {
        signInWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log(user);
            navigation.navigate('createUser', { idUser: user.uid })
        })
        .catch((error) => {
            setErrorLogin(true)
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
    }

    useEffect(() => {

    }, [])

    return (
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <Text
                style={styles.title}
            >
              Login
            </Text>
            <TextInput
              id="inputname"
              style={styles.input}
              placeholder="enter your email"
              type="text"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <TextInput
              style={styles.input}
              placeholder="enter your password"
              secureTextEntry={true}
              type="text"
              onChangeText={(password) => setPassword(password)}
              value={password}
            />
            {(errorLogin)
            ?
            <View style={styles.contentAlert}>
                <MaterialCommunityIcons
                    name='alert-circle'
                    size={24}
                    color='#bdbdbd'
                />
                <Text style={styles.warningAlert}>
                    invalid email or password !!!
                </Text>
            </View>
            :
            <>
            </>
            }
            { (email === "" || password === "")
            ?
            <TouchableOpacity
                style={styles.buttonLoginDisabled}
                disabled={true}
            >
                <Text style={styles.textButtonLogin}>Entrar</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.buttonLogin}
                onPress={loginFirebase}
            >
                <Text style={styles.textButtonLogin}>Entrar</Text>
            </TouchableOpacity>
            }
            <Text style={styles.registration}>
                Não é cadastrado ainda?
                <Text
                    style={styles.linkSubscribe}
                    onPress={() => navigation.navigate('createUser')}
                >
                    criar perfil
                </Text>
            </Text>
            <View style={{height: 100}}/>
        </KeyboardAvoidingView>
  );
}
