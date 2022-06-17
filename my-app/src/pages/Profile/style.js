import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    body: {
      backgroundColor: '#0984e3',
      margin: '250 200',
      fontSize: 16,
    },
    
    mainContainer: {
      height: '100%',
      backgroundColor: '#0984e3',
      borderRadius: 6,
      boxShadow: '1px 5px 1px rgba(0, 0, 0, 0.3',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    
    topContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 100,
      backgroundColor: '#00cec9',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.7,
    },
    
    profileImage: {
      width: 150,
      height: 150,
      marginTop: 80,
      backgroundColor: '#0984e3',
      borderRadius: 500,
    },

    bottomContainer: {
      borderRadius: 8,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '95%',
      height: '50%',
      backgroundColor: '#dfe6e9',
    },
    
    profileName: {
      color: '#e17055',
      fontWeight: 'bold',
      fontSize: 25,
    },
    
    label: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#6c5ce7',
    },
    
    title: {
      fontWeight: 'normal',
      fontSize: 16,
      color: '#6c5ce7', 
    },

    linkEdit: {
      fontSize: 12, 
    },
})

export default styles