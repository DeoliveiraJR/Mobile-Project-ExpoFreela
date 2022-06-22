import React from 'react';
import { useState, useEffect, useRef } from 'react';
import {
    Text, 
    View,
    Modal,
    TouchableOpacity,
} from 'react-native';
import { firebaseAuth, db } from '../../Helpers/firebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore";
import styles from './styles'
import { EnviarUbidots, ReceberUbidotsMPU1 } from '../../Helpers/scriptUbidots'
import LottieView from 'lottie-react-native';


export default function CollectData({ route }) {
  const [name, setName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
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
      setGraph1(dataQuery.link1)
      setGraph2(dataQuery.link2)
      return dataQuery;
    })
  }

  useEffect(() => {
    /* const user = firebaseAuth.currentUser.email;
    const docRef = collection(db, "Users");
    const q = query(docRef, where("email", "==", user));
    const data = getDocsFirebase(q); */
  }, [])
  
  const handleReceiveUbidots = () => {
    ReceberUbidotsMPU1();
    setModalVisible(!modalVisible);
  }

  const handleSendUbidots = () => {
    EnviarUbidots();
    setModalVisible(!modalVisible);
    setLoading(true)
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.title}>
          Bem-vindo <Text style={styles.titleName}>{name}</Text>
        </Text>
        <Text style={styles.title}>
          Pressione o botão para coleta de dados
        </Text>
      </View>
      <View>
      {(loading)
      ?
      <LottieView
          autoPlay
          ref={animation}
          style={styles.loading}
          source={require('../../assets/success-tick2.json')}
          resizeMode='contain'       
          loop={false}
          onAnimationFinish={() => setLoading(false)}
      />
      :
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.textStyleLabel}>Confirma o envio?</Text>
                
                <TouchableOpacity
                  style={[styles.buttonModal]}
                  onPress={() => handleSendUbidots()}
                >
                  <Text style={styles.textStyle}>SIM</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={[styles.buttonModal]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>NÃO</Text>
                </TouchableOpacity>

              </View>
            </View>
          </Modal>
          
          <TouchableOpacity
            style={[styles.buttonCollect]}
            onPress={() => handleReceiveUbidots()}
          >
            <Text style={styles.titleBtn}>Coletar Dados</Text>
          </TouchableOpacity>
        </View>
        }
      </View>
    </View>
  )
}
