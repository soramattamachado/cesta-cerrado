import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MenuItemButton = (props) => {
  const {
    text,
    link = () => {},
    Iconcolor = 'rgba(90, 156, 84, 0.5)',
    customStyles
  } = props;

  const TouchableOpacityStyle = {...customStyles, ...styles.btn};

  return (
    <TouchableOpacity onPress={link} style={TouchableOpacityStyle}>
      <Text style={styles.submitBtnText}>{text}</Text>
      <Icon name='arrow-right' size={32} color={Iconcolor}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  submitBtnText: {
    fontFamily: 'NunitoRegular',
    fontSize: 18,
    textAlign: 'center',
    top: 0,
    bottom: 0,
    color: 'rgba(0, 0, 0, 0.54)'
  }
});

export default MenuItemButton;
