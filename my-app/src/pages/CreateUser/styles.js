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
      textAlign: "center",
      marginBottom: 10,
      fontWeight: 'bold',
      color: '#ffff'
    },

    labels: {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      width: '100%',
      marginRight:'auto',
      marginTop:10,
      color: '#ffff',
      justifyContent: 'center',
    },
     
    input: {
      backgroundColor: '#ffff',
      borderRadius: 10,
      width: 300,
      marginLeft:'auto',
      marginRight:'auto',
      marginTop:5,
      padding: 5,
      height: 50,
      color: "#4d5156",  
    },

    checkboxContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "row",
      marginBottom: 10,
      marginTop: 15,
    },
    
    checkbox: {
      alignSelf: "center",
      backgroundColor: 'white',
      marginBottom: 0,
    },
    
    label: {
      margin: 5,
      color:'#ffff',
    },
    
    centeredView: {
      flex: 1,
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
      elevation: 5
    },

    button: {
      width: 300,
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },

    buttonDayModal: {
      backgroundColor: "#ffeaa7",
      marginTop: 10,
      borderRadius: 5,
    },

    textStyle: {
      color: '#6c5ce7',
      fontWeight: "bold",
      textAlign: "center"
    },
    
    buttonOpen: {
      backgroundColor: "#ffeaa7",
      marginTop: 10,
    },

    textSelected: {
      fontSize: 15,
      color: '#e17055',
      fontWeight: "bold",
      textAlign: "center"
    },

    containerBtnRegister: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop:15,
      marginBottom: 10,
    },
    
    buttonLoginDisabled: {
      width: 200,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:40,
      marginTop: 10,
      backgroundColor: "#00BFFF",
    },

    textButtonLogin: {
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#ffffff',
    },

    buttonLogin: {
      width: 200,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:40,
      backgroundColor: "#00008B",
      marginTop: 10,
    },
        
    registration: {
      color: '#ffff',
      textAlign: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    
    linkSubscribe: {
      color: '#00BFFF',
      marginLeft: 5,
      fontSize: 16,
    },
      
    loading: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: 'white',
      width: '100%',
      height: '110%',
    },
    
  })

export default styles