import React from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const SubmitButton = (props) => {
  const {
    text,
    isMain = true,
    submitHandler,
    customStyles = {}
  } = props;

  const TouchableOpacityStyle = {...styles.submitBtn, ...(isMain ? styles.mainBtn : []), ...customStyles};
  const TextStyle = {...styles.submitBtnText, ...(isMain ? styles.mainText : styles.secundaryText)};

  return (
    <TouchableOpacity onPress={submitHandler} style={TouchableOpacityStyle}>
      <Text style={TextStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submitBtn: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 6,
  },
  mainBtn: {
    backgroundColor: '#5A9C54',
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2
  },
  submitBtnText: {
    fontFamily: 'NunitoSemiBold',
    fontSize: 14,
    textAlign: 'center',
    top: 0,
    bottom: 0,
    margin: 'auto'
  },
  mainText: {
    color: '#FFFFFF'
  },
  secundaryText: {
    color: '#5A9C54'
  }
});

export default SubmitButton;
