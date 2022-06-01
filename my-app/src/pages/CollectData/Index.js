import React from 'react';
import { useState, useEffect } from 'react';
import {
    Text, 
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import styles from './styles'

// import { firebaseAuth } from '../../config/firebaseConfig'
// import { signInWithEmailAndPassword } from '@firebase/auth'

export default function Login({ navigation }) {
    /* const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState("");

    const loginFirebase = () => {
    }

    useEffect(() => {

    }, []) */

    return (
        <View style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.title}>Pressione o botão para coleta de dados!!!</Text>
            </View>
            <TouchableOpacity style={styles.buttonCollect}>
                <Text>Coletar</Text>
            </TouchableOpacity>
        </View>
    );
}
