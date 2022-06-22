import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/pages/Login/Index';
import CreateUser from './src/pages/CreateUser/index';
import CollectData from './src/pages/CollectData/Index';
import History from './src/pages/History/index';
import Profile from './src/pages/Profile';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { firebaseAuth } from './src/Helpers/firebaseConfig';
import { SplashScreen } from './src/Components/SplashScreen/index';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Tabs() {
  return(
    <Tab.Navigator initialRouteName="collectData">
      <Tab.Screen
        name="history"
        component={History}
        options={{
          tabBarLabel: "history",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon
            name="data-usage"
            color={ color }
            size={26}
            />
            )
          }}  
          />
      <Tab.Screen
        name="collectData"
        component={CollectData}
        options={{
          tabBarLabel: "home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon
            name="roofing"
            color={ color }
            size={26}
            />
            )
          }}
          />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: "profile",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon
            name="person-pin"
            color={ color }
            size={26}
            />
            )
          }}  
          />  
    </Tab.Navigator>
  )
}

export default function App() {
  const [appIsReady, setAppsReady] = useState(false);

  /* 
  useEffect(() => {
    const user = firebaseAuth.currentUser.email;
    console.log(user);
    if(user === null || user === undefined) {
      setAppsReady(true);
    } else {
      setAppsReady(true);
      navigation.navigate('home')
    } 
  
  }, [])
  */

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
          tabShown: false,
        }}
        />
      
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
          tabShown: false,
        }}
        />
    
      <Stack.Screen
        name="createUser"
        component={CreateUser}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="home"
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="history"
        component={History}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
