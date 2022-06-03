import { View, Text } from 'react-native'
import NavBarIcons from '../../Components/NavBar/index';
import styles from './style';

function onPressHome(){
  navigation.navigate('home')
}

export default function History() {
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
        <Text style={styles.titleChart}>Grafico Semanal</Text>
        <View style={styles.containerChart}>GRAFICO 1</View>
     </View>
     <View style={styles.chartSecondContainer}>
        <Text style={styles.titleChart}>Histórico de dados:</Text>
        <View style={styles.containerChart}>GRAFICO 2</View>
     </View>

   </View>

  );
}

