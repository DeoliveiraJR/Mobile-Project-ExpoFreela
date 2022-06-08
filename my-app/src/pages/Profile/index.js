import { View, Image, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import styles from './style';
import { firebaseAuth, db } from '../../Helpers/firebaseConfig';
import { collection, query, where, doc, setDoc, getDocs } from "firebase/firestore";
import { useState, useEffect } from 'react';

export default function Profile() {

const getDocsFirebase = async (q) => {
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const dataQuery = doc.data();
    console.log(dataQuery);
    return dataQuery;
  })
}

useEffect(() => {
  const user = firebaseAuth.currentUser.email;
  const docRef = collection(db, "Users");
  const q = query(docRef, where("email", "==", user));
  const data = getDocsFirebase(q);
}, [])
  
return (
 <View style={styles.mainContainer}>
    <View style={styles.topContainer}>
      <FontAwesome style={styles.profileImage} name="user-circle" size={180} color="black" />
    </View>
    <View style={styles.bottomContainer}>
        <Text style={styles.profileName}>Teste1</Text>
        <Text style={styles.title}><b>Email:</b> teste1@test.com</Text>
        <Text style={styles.title}><b>Idade:</b> 30 anos</Text>
        <Text style={styles.title}><b>Tratamento:</b> não está em tratamento</Text>
        <Text style={styles.linkEdit}>Editar Perfil</Text>
    </View>
 </View>
 );
}