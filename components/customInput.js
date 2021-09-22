import React from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native';

const CustomInput = (props) => {
  const {
    placeholder,
    value = '',
    isSecure = true,
    keyboardType = 'default',
    setter,
    style = {}
  } = props;
  const composedStyle = {...styles.inputContainer, ...style};

  return (
    <View style={composedStyle}>
      <View style={styles.input}>
        <TextInput
          secureTextEntry={isSecure}
          value={value}
          keyboardType={keyboardType}
          style={styles.inputText}
          placeholder={placeholder}
          placeholderTextColor='rgba(0, 0, 0, 0.54)'
          autoCorrect={false}
          autoCapitalize='none'
          onChangeText={(text) => setter(text)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    width: '100%',
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor:'#rgba(38, 66, 36, 1)',
  },
  inputText: {
    fontFamily: 'NunitoRegular',
    fontSize: 16
  }
});

export default CustomInput;
