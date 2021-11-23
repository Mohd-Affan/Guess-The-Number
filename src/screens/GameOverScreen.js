import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function GameOverScreen(props) {
  return (
    <View style={styles.container}>
      <Text>The Game Is Over</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
});
