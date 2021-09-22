import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SubmitButton from '../components/submitButton';
import Login from '../screens/login';
import Register from '../screens/register';
import RecoverPassword from '../screens/recoverPassword';
import Home from '../screens/home';
import CategoryDetails from '../screens/categoryDetails';
import BottomNavigation from './bottomNavigation';
import PurchaceDetail from '../screens/purchaceDetail';
import ItemDetails from '../screens/itemDetails';
import Rating from '../screens/rating';
import UserData from '../screens/userData';
import EditUserData from '../screens/editUserData';
import ActualLocation from '../screens/actualLocation';
import FidelityPoints from '../screens/fidelityPoints';
import Seller from '../screens/seller';
import NewItem from '../screens/newItem';

import { DeliveryProfileScreen, DeliveryRegisterScreen } from '../screens'

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerShown: false,
  headerTintColor: 'white',
  headerBackTitle: 'Back'
};



const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Register'
        component={Register}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: ''
        }}
      />
      <Stack.Screen
        name='RecoverPassword'
        component={RecoverPassword}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: '#5A9C54',
          title: 'VOLTAR',
          headerStyle: {
            height: 160
          }
        }}
      />
      <Stack.Screen
        name='DashboardStack'
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='ActualLocationStack'
        component={ActualLocation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='CategoryDetailsStack'
        component={CategoryDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='ItemDetailsStack'
        component={ItemDetails}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='PurchaceDetail'
        component={PurchaceDetail}
        options={{
          headerShown: false,
          headerTransparent: true,
          headerTintColor: '#5A9C54',
        }}
      />
      <Stack.Screen
        name='Rating'
        component={Rating}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: '#5A9C54',
          title: 'VOLTAR',
          headerStyle: {
            height: 160
          }
        }}
      />
      <Stack.Screen
        name='UserData'
        component={UserData}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: '#5A9C54',
          title: 'VOLTAR',
          headerStyle: {
            height: 160
          }
        }}
      />
      <Stack.Screen
        name='EditUserData'
        component={EditUserData}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: '#5A9C54',
          title: 'VOLTAR',
          headerStyle: {
            height: 160
          }
        }}
      />
      <Stack.Screen
        name='FidelityPoints'
        component={FidelityPoints}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: '#5A9C54',
          title: 'VOLTAR',
          headerStyle: {
            height: 160
          }
        }}
      />
      <Stack.Screen
        name='Seller'
        component={Seller}
        options={({ navigation }) => ({
          headerShown: false,
          headerTransparent: true,
          headerTintColor: '#5A9C54',
        })}
      />
      <Stack.Screen
        name='DeliveryProfileStack'
        component={DeliveryProfileScreen}
        options={({ navigation }) => ({
          headerShown: false,
          headerTransparent: true,
          headerTintColor: '#5A9C54',
        })}
      />
      <Stack.Screen
        name='DeliveryRegisterStack'
        component={DeliveryRegisterScreen}
        options={({ navigation }) => ({
          headerShown: false,
          headerTransparent: true,
          headerTintColor: '#5A9C54',
        })}
      />


      <Stack.Screen
        name='NewItem'
        component={NewItem}
        options={{
          headerShown: false,
          headerTransparent: true,
          headerTintColor: '#5A9C54',
        }}
      />
      <Stack.Screen
        name='BottomStack'
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

export { AppNavigation };
