import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Nunito_400Regular as NunitoRegular,
  Nunito_600SemiBold as NunitoSemiBold,
  Nunito_700Bold as NunitoBold
} from '@expo-google-fonts/nunito';
import Routes from './navigation';


const App = () => {
  let [fontsLoaded] = useFonts({
    NunitoRegular,
    NunitoSemiBold,
    NunitoBold
  });

  if (!fontsLoaded) return <AppLoading />

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff'
  },
});

export default App;
