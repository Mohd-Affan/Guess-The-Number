import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../constants/colors';

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.headerText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.themeColor,
    height: 90,
    paddingTop: 40,
  },
  headerText: {
    fontSize: 20,
  },
});
