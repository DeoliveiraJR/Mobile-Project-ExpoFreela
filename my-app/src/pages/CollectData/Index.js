import React from 'react';
import { useState, useEffect } from 'react';
import {
    Text, 
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import TabNavigation from '../../Helpers/routes'
import styles from './styles'


export default function CollectData({ route }) {
  const [email, setEmail] = useState(""); 
  
  useEffect(() => {
  }, [])
    
  return (
    <View style={styles.container}>
        <View style={styles.containerText}>
            <Text style={styles.title}>
                Bem-vindo {/* {route.params.uid} */}
            </Text>
            <Text style={styles.title}>
              Pressione o botão para coleta de dados!!!
            </Text>
        </View>
        <TouchableOpacity style={styles.buttonCollect}>
            <Text style={styles.titleBtn}>Iniciar</Text>
        </TouchableOpacity>
    </View>
  );
}
