// Bottom Navigation with Navigation Icon from Local Directory
// https://aboutreact.com/react-native-bottom-navigation-icon-from-local/

import 'react-native-gesture-handler';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingScreen';
import DetailScreen from "./screens/DetailScreen";
import TodoScreen from "./screens/TodoScreen";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()
function SettingStack(){
    return (
        <Stack.Navigator
            initialRouteName="Settings"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />

        </Stack.Navigator>
    )
}
function HomeStack(){
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                // headerShown: false
            }}
        >
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Todo" component={TodoScreen} />

        </Stack.Navigator>
    )
}
function ProfileStack(){
    return (
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />

        </Stack.Navigator>
    )
}
function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ paddingBottom: 48 }}
            screenOptions={{
              activeTintColor: '#42f44b',
                headerShown: false
            }}>
          <Tab.Screen
              name="HomeStack"
              component={HomeStack}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({focused, color, size}) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
              }}
          />
          <Tab.Screen
              name="SettingTask"
              component={SettingStack}
              options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({focused, color, size}) => (
                    <MaterialCommunityIcons name="bell" color={color} size={size} />
                ),
              }}
          />
            <Tab.Screen
                name="ProfileStack"
                component={ProfileStack}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({focused, color, size}) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
export default App;
