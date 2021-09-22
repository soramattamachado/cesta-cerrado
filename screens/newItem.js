import React, { useState } from "react";
import {

  KeyboardAvoidingView,

  StyleSheet,
  View,
  Text,
  TextInput,

} from 'react-native';
import CustomInput from '../components/customInput';
import SubmitButton from '../components/submitButton';

import { Button } from 'react-native-paper';
const NewItem = ({ route, navigation }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [value, setvalue] = useState('');
  const [adress, setAdress] = useState('');

  const handleSubmit = () => {
    console.log('submited!');
  };

  return (
    <KeyboardAvoidingView
      behavior={'height'}
      keyboardVerticalOffset='250'
      style={styles.container}
    >
      <View style={styles.topContent}>
        <Button color="#5A9C54" icon="arrow-left" mode="text" onPress={() => navigation.goBack()}>Voltar</Button>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Novo item</Text>
        <View style={styles.addPicture}>
          <Text style={styles.addPictureText}>Adicionar foto</Text>
        </View>
        <CustomInput
          style={{ flex: 1 }}
          placeholder='Nome do produto ou serviço'
          value={name}
          isSecure={false}
          setter={setName}
        />
        <CustomInput
          style={{ flex: 1 }}
          placeholder='Categoria'
          value={category}
          isSecure={false}
          setter={setCategory}
        />
        <View style={styles.inputWrapper} >
          <Text style={styles.inputTitle}>Descrição</Text>
          <TextInput
            style={styles.input}
            maxLength={300}
            multiline={true}
          />
        </View>
        <CustomInput
          style={{ flex: 1 }}
          placeholder='Valor'
          value={value}
          isSecure={false}
          keyboardType='numeric'
          setter={setvalue}
        />
        <Button style={{ width: 360, marginBottom: 20, marginTop: -25 }} color="#5A9C54" icon="map-marker-radius" mode="outlined" >Local de Retirada do Produto</Button>
        <View style={styles.submitWrapper}>
          <SubmitButton customStyles={styles.submit} isMain={true} text='POSTAR NOVO ITEM' submitHandler={handleSubmit} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  topContent: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    padding: 18,
    marginBottom: -120
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '87.20%',
    left: 0,
    right: 0,

  },
  title: {
    fontFamily: 'NunitoRegular',
    fontSize: 24,
    marginTop: 120,
    marginBottom: 40
  },
  addPicture: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#616161',
    marginBottom: 40
  },
  addPictureText: {
    fontFamily: 'NunitoRegular',
    fontSize: 16,
    color: '#FFFFFF'
  },
  inputWrapper: {
    flex: 1,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#rgba(38, 66, 36, 1)',
    marginBottom: 40
  },
  inputTitle: {
    fontFamily: 'NunitoRegular',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.54)'
  },
  submitWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%'
  },
  submit: {
    width: '100%',
    bottom: 30
  }
});

export default NewItem;
