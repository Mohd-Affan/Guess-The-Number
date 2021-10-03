import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from './src/components/Header';
import StartGameScreen from './src/screens/StartGameScreen';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Guess The Number" />
        <StartGameScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
