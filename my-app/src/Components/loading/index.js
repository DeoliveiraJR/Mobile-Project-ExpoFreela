import React, { useRef, useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './style';
// import { useNavigation } from '@react-navigation/native';

export function Loading() {
  const animation = useRef(null);
  // const navigation = useNavigation();

  useEffect(() => {
  }, []);

  return (
    <SafeAreaView style={styles.animationContainer}>
        <View style={styles.animationContainer}>
            <LottieView
              autoPlay
              ref={animation}
              style={styles.animation}
              source={require('../../assets/loading.json')}
              resizeMode='contain'       
              // loop={false}
              // duration={6000}
              // onAnimationFinish={() => navigation.navigate('login')}
            />
        </View>
    </SafeAreaView>
  );
}
