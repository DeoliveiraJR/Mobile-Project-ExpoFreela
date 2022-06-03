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
      height: '30%',
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: '99%',
      borderRadius: '10px',
      backgroundColor: '#dfe6e9',
      marginTop: '5px',
    },

    title: {
      color: '#6c5ce7',
      fontSize: '23px'
    },

    titleBtn: {
      fontSize: '45px',
      color: '#6c5ce7',
      fontWeight:'700',
    },

    buttonCollect: {
      border: '5px solid #ffff',
      boxshadow: '10px 10px 5px #aaaaaa',
      alignItems: 'center',
      justifyContent: 'center',
      width: 300,
      height: 300,
      backgroundColor: '#00cec9',
      borderRadius: 500,
      marginBottom: '100px'
    },
})

export default styles