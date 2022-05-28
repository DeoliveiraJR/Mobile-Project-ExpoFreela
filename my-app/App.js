import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/Login/Index'
import CreateUser from './src/pages/createUser/index'

const Stack = createStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    
    <Stack.Screen
        name="createUser"
        component={CreateUser}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
