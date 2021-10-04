import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../constants/colors';

export default function SelectedNumber(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.themeColor,
  },
  containerText: {
    fontSize: 40,
    color: colors.themeColor,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});
