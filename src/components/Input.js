import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import colors from '../constants/colors';

export default function Input(props) {
  return <TextInput {...props} style={{...styles.input, ...props.style}} />; //{...props} should be written before {...styles.input} so that styles.input can overwrite the props. Just like ...props.style will overwrite the ...styles.input
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'lavender',
    textAlign: 'center',
    color: colors.themeColor,
  },
});
