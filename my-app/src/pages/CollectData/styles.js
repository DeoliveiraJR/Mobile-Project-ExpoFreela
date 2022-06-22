import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#4169E1',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },

    containerText: {
      height: '28%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '99%',
      borderRadius: 10,
      backgroundColor: '#dfe6e9',
      opacity: 0.8,
    },

    title: {
      color: '#e17055',
      fontSize: 17,
      textAlign: 'center',
    },
    
    titleName: {
      color: '#6c5ce7',
      fontSize: 18,
      fontWeight: 'bold',
    },

    titleBtn: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#6c5ce7',
      
    },

    buttonCollect: {
      alignItems: 'center',
      borderWidth: 3,
      borderStyle: 'solid',
      borderColor: '#ffff',
      justifyContent: 'center',
      width: 320,
      height: 320,
      backgroundColor: '#00cec9',
      borderRadius: 500,
      marginBottom: 150,
    },

    centeredView: {
      flex: 1,  
      display: 'flex',
      justifyContent: "center",
      alignItems: "center",
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
      elevation: 5,
    },

    buttonModal: {
      margin: 5,
      padding: 10,
      borderRadius: 10,
      width: 200,
      height: 'auto',
      backgroundColor: "#dfe6e9",
    },

    textStyle: {
      color: '#6c5ce7',
      fontWeight: "bold",
      textAlign: "center"
    },

    modalText: {
      color: '#6c5ce7',
      marginBottom: 15,
      textAlign: "center"
    },

    textStyleLabel: {
      color: '#ff7675',
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 20,
    },

    /* animationContainer: {
      flex: 1,
      backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
      
    lottieContainer: { 
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }, */
    
    loading: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%',
      height: '80%',
    },
})

export default styles