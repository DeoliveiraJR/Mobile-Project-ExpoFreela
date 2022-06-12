import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      backgroundColor: '#4169E1',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Platform.OS === 'ios' ? 0 : 50,        
    },
    title: {
      borderBottomWidth: 2,
      borderBottomColor: '#00BFFF',
      fontSize: 30,
      marginBottom: 10,
      fontWeight: 'bold',
      color: '#ffff'
    },
    input: {
      backgroundColor: '#ffff',
      borderRadius: 10,
      width: 300,
      marginLeft:'auto',
      marginRight:'auto',
      marginTop:10,
      padding: 10,
      height: 50,
      borderBottomWidth: 1,
      borderBottomColor: '#F92E6A',
      color: "#4d5156",  
    },
    buttonLoginDisabled: {
      width: 200,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:40,
      backgroundColor: "#00BFFF",
      marginTop: 30,
    },
    buttonLogin: {
      width: 200,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:40,
      backgroundColor: "#00008B",
      marginTop: 30,
    },
    textButtonLogin: {
      color: '#ffffff',
    },
    contentAlert: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    warningAlert: {
      paddingLeft: 10,
      color: '#FFD700',
      fontSize: 16,
    },
    registration: {
      marginTop: 20,
      color: '#ffff',
    },
    linkSubscribe: {
      color: '#00BFFF',
      marginLeft: 5,
      fontSize: 16,
    },
    labels: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      marginRight:'auto',
      marginTop:'auto',
      color: '#ffff',
      justifyContent: 'center',
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
      marginTop: 20,
    },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      margin: 8,
      color:'#ffff',
    },
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
      width: 300,
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: "#ffeaa7",
    },
    buttonClose: {
      backgroundColor: "#ffeaa7",
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
    }
})

export default styles