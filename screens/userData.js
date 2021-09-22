import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Images from '../utils/images';
import MenuItemButton from '../components/menuItemButton';
import Separator from '../components/separator';

const UserData = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.menu}>
          <Text style={styles.title}>Meus Dados</Text>
          <TouchableOpacity onPress={() => navigation.navigate('EditUserData')}>
            <Text style={styles.edit}>EDITAR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.user}>
          <Avatar.Image size={48} style={styles.userAvatar} source={Images.default_avatar}/>
          <View style={styles.userData}>
            <Text style={styles.userName}>Jucélia Santos</Text>
            <Text style={styles.userEmail}>jucelia-santos@gmail.com</Text>
          </View>
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
  edit: {
    fontFamily: 'NunitoSemiBold',
    fontSize: 14,
    color: '#5A9C54'
  },
  user: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 60,
    width: '100%'
  },
  userAvatar: {
    height: 60,
    width: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#AAAAAA',
    marginBottom: 22
  },
  userData: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontFamily: 'NunitoSemiBold',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.87)'
  },
  userEmail: {
    fontFamily: 'NunitoRegular',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.54)'
  }
});

export default UserData;
