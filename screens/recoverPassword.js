import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/customInput';
import SubmitButton from '../components/submitButton';

const RecoverPassword = () => {
  const [email, setEmail] = useState('');
  const [emailConfirmation, setEmailConfirmation] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log('handleSubmit called!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.topContent}>
          <Text style={styles.titleText}>Esqueci minha senha</Text>
          <CustomInput
            placeholder='E-mail'
            value={email}
            isSecure={false}
            keyboardType='email-address'
            setter={setEmail}
          />
          <CustomInput
            placeholder='Confirmar e-mail'
            value={emailConfirmation}
            isSecure={false}
            setter={setEmailConfirmation}
          />
        </View>
        <View style={styles.bottomContent}>
          <SubmitButton text='ENVIAR E-MAIL DE RECUPERAÇÃO' submitHandler={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '87.20%',
    height: '100%',
    left: 0,
    right: 0,
    margin: 'auto'
  },
  topContent: {
    flex: 3,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  bottomContent: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  titleText: {
    fontFamily: 'NunitoRegular',
    fontSize: 34,
    marginTop: 100
  },
  orText: {
    marginVertical: 16
  }
});


export default RecoverPassword;
