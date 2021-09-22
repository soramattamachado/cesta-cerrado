import React from 'react';
import { StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './bottomNavigation'


const Stack = createStackNavigator();


const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerShown: false,
  headerTintColor: 'white',
  headerBackTitle: 'Back'
};

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName='Login'>
      <Stack.Screen
        name='Home'
        component={BottomNavigation}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }
});

export default MainNavigator;
