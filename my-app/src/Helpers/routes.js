import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="login" component={Login} />
      <Tab.Screen name="createUser" component={CreateUser} />
    </Tab.Navigator>
  );
}