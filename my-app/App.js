import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/pages/Login/Index';
import CreateUser from './src/pages/CreateUser/index';
import CollectData from './src/pages/CollectData/Index';
import History from './src/pages/CollectData/Index';
import Profile from './src/pages/CollectData/Index';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

/* function Tabs() {
  return(
    <Tab.Navigator>
      <Tab.Screen
        name="collectData"
        component={CollectData}
        options={{
          headerShown: false,
        }}  
      />
      <Tab.Screen
        name=""
        component={}
        options={{
          headerShown: false,
        }}  
      />  
    </Tab.Navigator>
  )
} */

export default function App() {

  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName="collectData">
      <Tab.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
          tabShown: false,
        }}
      />
    
      <Tab.Screen
        name="createUser"
        component={CreateUser}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="collectData"
        component={CollectData}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
  );
}
