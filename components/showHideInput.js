import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { IconButton } from "react-native-paper";
import CustomInput from '../components/customInput';

const ShowHideInput = (props) => {
  const {
    placeholder,
    value = '',
    isSecure = true,
    keyboardType = 'default',
    setter,
    style = []
  } = props;
  const composedStyle = {...style, ...styles.inputContainer};
  const [isTextSecure, setIsTextSecure] = useState(isSecure);

  return (
    <View style={composedStyle}>
      <CustomInput
        style={style}
        placeholder={placeholder}
        value={value}
        isSecure={isTextSecure}
        keyboardType={keyboardType}
        setter={setter}
      />
      <IconButton
        icon={isTextSecure ? 'eye' : 'eye-off'}
        style={styles.eyeIcon}
        color='rgba(0, 0, 0, 0.54)'
        size={20}
        onPress={() => setIsTextSecure(!isTextSecure)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0
  }
});

export default ShowHideInput;
