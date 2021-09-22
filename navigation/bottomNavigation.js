import React from 'react'

import 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/home';
import History from '../screens/history'
import Profile from '../screens/profile'

const Tab = createBottomTabNavigator();

function bottomNavigation() {
    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            tabBarOptions={{
                activeTintColor: '#42f44b',
            }}>
            <Tab.Screen
                name="HomeStack"
                component={Home}
                options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="HistoryStack"
                component={History}
                options={{
                    tabBarLabel: 'Histórico',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="progress-clock" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="ProfileStack"
                component={Profile}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default bottomNavigation;
