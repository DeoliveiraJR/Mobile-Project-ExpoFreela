import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
      backgroundColor: 'blue',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#4169E1',
      alignItems: 'center',
      justifyContent: 'center', 
    },
    paragraphContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '5px',
      width: '60%',
      height: '100px',
      backgroundColor: '#dfe6e9',
      marginLeft: 'auto',
      marginRight: 'auto',
    },

    titleParagraph: {
      fontFamily: 'roboto, sans-serif',
      fontSize: '1em',
      color: '#6c5ce7',
    },

    chartFirstContainer: {
      width: '60%',
      height: '40%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
    },

    titleChart: {
      fontFamily: 'roboto, sans-serif',
      color: 'white',
      fontSize: '2em',
      fontWeight: 'bold',
      marginTop: '10px',
      color: '#55efc4',
    },

    containerChart: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '5px',
      margintop: '10px',
      backgroundColor: 'white',
      width: '100%',
      height: '200px',
    },

    chartSecondContainer: {
      width: '60%',
      height: '40%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
})

export default styles