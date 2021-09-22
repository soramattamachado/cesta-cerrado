import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Images from '../utils/images';
import MenuItemButton from '../components/menuItemButton';
import Separator from '../components/separator';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.user}>
          <Avatar.Image size={48} style={styles.userAvatar} source={Images.default_avatar} />
          <View style={styles.UserData}>
            <Text style={styles.userName}>Jucélia Santos</Text>
            <TouchableOpacity onPress={() => navigation.navigate('UserData')}>
              <Text style={styles.userDataLink}>Meus dados</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <MenuItemButton text='Pontos de fidelidade' link={() => navigation.navigate('FidelityPoints')} customStyles={styles.linkdBtn} />
        <Separator customStyles={styles.separator} />
        <MenuItemButton text='Sou vendedor(a)' link={() => navigation.navigate('Seller')} customStyles={styles.linkdBtn} />
        <Separator customStyles={styles.separator} />
        <MenuItemButton text='Sou entregador(a)' link={() => navigation.navigate('DeliveryProfileStack')} customStyles={styles.linkdBtn} />
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
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderBottomColor: 'rgba(90, 156, 84, 0.5)',
    borderBottomWidth: 1
  },
  user: {
    flexDirection: 'row',
    marginTop: 80,
    marginBottom: 20,
    width: '87.20%'
  },
  userAvatar: {
    height: 60,
    width: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AAAAAA'
  },
  UserData: {
    marginLeft: 16
  },
  userName: {
    fontFamily: 'NunitoRegular',
    fontSize: 24,
    color: 'rgba(0, 0, 0, 0.87)'
  },
  userDataLink: {
    fontFamily: 'NunitoRegular',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.87)'
  },
  content: {
    flex: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '87.20%',
    height: '100%',
    marginTop: 20
  },
  linkdBtn: {
    alignItems: 'center'
  },
  separator: {
    marginTop: 20,
    marginBottom: 20,
  }
});

export default Profile;
