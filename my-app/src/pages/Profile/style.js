import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    body: {
      backgroundColor: '#0984e3',
      margin: '250px 200px',
      padding: 0,
      fontFamily: 'roboto, sans-serif',
      fontSize: '16px',
    },
    
    mainContainer: {
      height: '100%',
      backgroundColor: '#0984e3',
      borderRadius: '6px',
      boxShadow: '1px 5px 1px rgba(0, 0, 0, 0.3',
      display: 'flex',
      flexDirection: 'colum',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    
    topContainer: {
      width: '100%',
      height: '120px',
      borderRadius: '6px',
      backgroundColor: '#00cec9',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: '0.5',
    },
    
    profileImage: {
      backgroundColor: '#ffff',
      height: '240px',
      padding: '5px',
      borderRadius: '50%',
      borderBottomColor: '#6c5ce7',
      marginTop: '125px',
    },

    bottomContainer: {
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'colum',
      justifyContent: 'space-around',
      flexWrap: 'warp',
      alignItems: 'center',
      width: '60%',
      height: '50%',
      backgroundColor: '#dfe6e9',
      textAlign: 'center',
    },

    profileName: {
      fontFamily: 'roboto, sans-serif',
      color: '#6c5ce7',
      fontSize: '2em',
      fontWeight: 'bold',
    },

    title: {
      alignContent: 'flex-start',
      fontFamily: 'roboto, sans-serif',
      fontSize: '25px',
      color: '#6c5ce7', 
    },

    linkEdit: {
      fontFamily: 'roboto, sans-serif',
      fontSize: '12px', 
    },
})

export default styles