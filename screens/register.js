import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/customInput';
import ShowHideInput from '../components/showHideInput';
import SubmitButton from '../components/submitButton';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log('handleSubmit called!');
  };

  const handleAlternative = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.topContent}>
          <Text style={styles.titleText}>CADASTRO</Text>
          <CustomInput
            placeholder='Nome completo'
            value={name}
            isSecure={false}
            setter={setName}
          />
          <CustomInput
            placeholder='E-mail'
            value={email}
            isSecure={false}
            keyboardType='email-address'
            setter={setEmail}
          />
          <ShowHideInput
            placeholder='Senha'
            value={password}
            isSecure={true}
            setter={setPassword}
          />
        </View>
        <View style={styles.bottomContent}>
          <SubmitButton text='CADASTRAR' submitHandler={handleSubmit} />
          <Text style={styles.orText}>ou</Text>
          <SubmitButton isMain={false} text='ENTRE' submitHandler={handleAlternative} />
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

export default Register;
