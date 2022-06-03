import { View, Image, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import styles from './style';

export default function Profile() {
    
  return (
   <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <FontAwesome style={styles.profileImage} name="user-circle" size={180} color="black" />
      </View>
      <View style={styles.bottomContainer}>
          <Text style={styles.profileName}>Teste1</Text>
          <Text style={styles.title}><b>Email:</b> teste1@test.com</Text>
          <Text style={styles.title}><b>Idade:</b> 30 anos</Text>
          <Text style={styles.title}><b>Tratamento:</b> não está em tratamento</Text>
          <Text style={styles.linkEdit}>Editar Perfil</Text>
      </View>
   </View>

  );
}