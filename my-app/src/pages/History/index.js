import { View, Text } from 'react-native'
import NavBarIcons from '../../Components/NavBar/index';
import styles from './style';
import { firebaseAuth, db } from '../../Helpers/firebaseConfig';
import { collection, query, where, doc, setDoc, getDocs } from "firebase/firestore";
import { useState, useEffect } from 'react';

function onPressHome(){
  navigation.navigate('home')
}

export default function History() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [describe, setDescribe] = useState("")
  const [dayWeek, setDayWeek] = useState("");    
  const [link1, setGraph1] = useState("");    
  const [link2, setGraph2] = useState("");    

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
      setGraph1(dataQuery.link1)
      setGraph2(dataQuery.link2)
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
     <View style={styles.paragraphContainer}>
       <Text style={styles.titleParagraph}>
         Aqui está o seu avanço com o passar das semanas,
         {'\n'}
         esses dados serão enviados ao seu médico. Qualquer
         {'\n'}
         variação estranha deverá ser contatada.
       </Text>
     </View>
     <View style={styles.chartFirstContainer}>
        <View style={styles.containerChart}>
          <Text style={styles.titleChart}>Grafico Semanal</Text>
        </View>
     </View>
     <View style={styles.chartSecondContainer}>
        <View style={styles.containerChart}>
          <Text style={styles.titleChart}>Histórico de dados:</Text>
        </View>
     </View>
   </View>
  );
}

