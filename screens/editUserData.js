import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Images from '../utils/images';
import MenuItemButton from '../components/menuItemButton';
import Separator from '../components/separator';
import CustomInput from '../components/customInput';
import ShowHideInput from '../components/showHideInput';
import SubmitButton from '../components/submitButton';

const EditUserData = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmed, setPasswordConfirmed] = useState('');

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.menu}>
          <Text style={styles.title}>Editar Meus Dados</Text>
        </View>
        <View style={styles.user}>
          <Avatar.Image size={62} style={styles.userAvatar} source={Images.default_avatar}/>
        </View>
        <View style={styles.userData}>
          <CustomInput
            placeholder='Nome completo'
            value={name}
            isSecure={false}
            setter={() => {}}
          />
          <CustomInput
            placeholder='E-mail'
            isSecure={false}
            value={email}
            keyboardType='email-address'
            setter={() => {}}
          />
          <Text style={styles.alterPasswordTitle}>Alterar senha</Text>
          <ShowHideInput
            placeholder='Nova senha'
            value={password}
            isSecure={true}
            setter={() => {}}
          />
           <ShowHideInput
            placeholder='Confirmar nova senha'
            value={passwordConfirmed}
            isSecure={true}
            setter={() => {}}
          />
        </View>
        <View style={styles.bottomContent}>
          <SubmitButton text='SALVAR ALTERAÇÔES' submitHandler={() => {}} />
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
  },
  content: {
    flex: 1,
    marginTop: 160,
    justifyContent: 'center',
    alignItems: 'center',
    width: '87.20%'
  },
  menu: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'NunitoRegular',
    fontSize: 24,
    color: '#264224'
  },
  user: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
    width: '100%'
  },
  userAvatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#AAAAAA'
  },
  userData: {
    flex: 6,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  userName: {
    fontFamily: 'NunitoSemiBold',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.87)'
  },
  alterPasswordTitle: {
    fontFamily: 'NunitoSemiBold',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.87)',
    alignSelf: 'stretch',
    textAlign: 'left'
  },
  bottomContent: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default EditUserData;
