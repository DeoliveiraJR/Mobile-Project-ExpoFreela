/* import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

export default function ModalList () {
  const [modalVisible, setModalVisible] = useState(false);
  const days = ["Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira"]
  const { handleOnClick, dayWeekProps } = this.props;
  return (
      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
        }}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                { days.map((day) => (
                  <Pressable
                    key={day}
                    style={[styles.button, styles.buttonDayModal]}
                    onPress={() => handleOnClick(day)}
                  >
              <Text style={styles.textStyle}>{day}</Text>
            </Pressable>
            ))}
            
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={styles.textStyle}>Selecione o dia: {dayWeekProps}</Text>
      </Pressable>
      
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
 */