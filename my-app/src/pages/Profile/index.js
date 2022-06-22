import { View, Image, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import styles from './style';
import { firebaseAuth, db } from '../../Helpers/firebaseConfig';
import { collection, query, where, doc, setDoc, getDocs } from "firebase/firestore";
import { useState, useEffect, useRef } from 'react';
import LottieView from 'lottie-react-native';

export default function Profile() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [describe, setDescribe] = useState("")
  const [dayWeek, setDayWeek] = useState("");    
  const [loading, setLoading] = useState(true);
  const animation = useRef(null);

  const getDocsFirebase = async (q) => {
    const querySnapshot = await getDocs(q);
    
    querySnapshot.forEach((doc) => {
      const dataQuery = doc.data();
      console.log(dataQuery);
      setName(dataQuery.name)
      setEmail(dataQuery.email)
      setAge(dataQuery.age)
      setDescribe(dataQuery.describe)
      setDayWeek(dataQuery.dayWeek)
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
    { loading ?
      <LottieView
        autoPlay
        ref={animation}
        style={styles.loading}
        source={require('../../assets/dance.json')}
        resizeMode='contain'
        loop={false}            
        onAnimationFinish={() => setLoading(false)}
      />
      :
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <FontAwesome style={styles.profileImage} name="user-circle" size={150} color="black" />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.profileName}>{name}</Text>
          <Text style={styles.label}>Email: <Text style={styles.title}>{email}</Text></Text>
          <Text style={styles.label}>Idade: <Text style={styles.title}>{age} anos</Text></Text>
          {(describe === "" || describe === undefined) ?
            <Text style={styles.label}>Tratamento: <Text style={styles.title}>não está em tratamento</Text></Text>
            :
            <Text style={styles.label}>Tratamento: <Text style={styles.title}>{describe}</Text></Text>}
            <Text style={styles.label}>Dia da semana: <Text style={styles.title}>{dayWeek}</Text></Text>
            <Text style={styles.linkEdit}>Editar Perfil</Text>
        </View>
      </View>
    }
  </View>
  );
}