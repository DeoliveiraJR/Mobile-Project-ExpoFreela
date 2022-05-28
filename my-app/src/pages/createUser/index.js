import React from 'react';
import { createUserWithEmailAndPassword } from '@firebase/auth'
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
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [errorLogin, setErrorLogin] = useState("");

    const registerFirebase = () => {
        createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then(() => {
            var user = userCredential.user;
            // navigation.navigate('createUser', { idUser: user.uid })
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
              Cadastro
            </Text>
            <Text style={styles.labels}>
                Digite seu nome completo :
            </Text>
            <TextInput
              style={styles.input}
              placeholder="enter your name"
              type="text"
              onChangeText={(text) => setName(text)}
              value={name}
            />
            <Text style={styles.labels}>
                Digite sua idade :
            </Text>
            <TextInput
              style={styles.input}
              placeholder="type your age"
              type="text"
              onChangeText={(text) => setAge(text)}
              value={age}
            />
            <Text style={styles.labels}>
                Insira um email válido :
            </Text>
            <TextInput
              style={styles.input}
              placeholder="register a email"
              type="text"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <Text style={styles.labels}>
                Insira uma senha :
            </Text>
            <TextInput
              style={styles.input}
              placeholder="create a password"
              secureTextEntry={true}
              type="text"
              onChangeText={(password) => setPassword(password)}
              value={password}
            />
            { (email === "" || password === "" || age === '' || name === '')
            ?
            <TouchableOpacity
                style={styles.buttonLoginDisabled}
                disabled={true}
            >
                <Text style={styles.textButtonLogin}>Cadastrar</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.buttonLogin}
                onPress={registerFirebase}
            >
                <Text style={styles.textButtonLogin}>Cadastrar</Text>
            </TouchableOpacity>
            }
            <Text style={styles.registration}>
                Já é cadastrado?
                <Text
                    style={styles.linkSubscribe}
                    onPress={() => navigation.navigate('login')}
                >
                    login
                </Text>
            </Text>
            <View style={{height: 100}}/>
        </KeyboardAvoidingView>
  );
}
