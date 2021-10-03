import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import colors from '../constants/colors';

export default function StartGameScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.mainHeading}>
        <Text style={styles.mainHeadingText}>Start A New Game!</Text>
      </View>
      <Card style={styles.subHeading}>
        <Text style={styles.subHeadingText}>Select a number</Text>
        <Input
          style={styles.textInput}
          placeholder="Enter Number"
          placeholderTextColor={colors.themeColor}
        />
        <View style={styles.buttons}>
          <TouchableOpacity>
            <Text style={styles.resetText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  mainHeading: {alignItems: 'center', marginTop: 25},
  mainHeadingText: {fontSize: 20},
  subHeading: {
    marginTop: 10,
    alignItems: 'center',
  },
  headingText: {fontSize: 20},
  subHeadingText: {fontSize: 15, marginTop: 20},
  textInput: {
    marginTop: 30,
    height: 20,
    width: '26%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginVertical: 30,
  },
  resetText: {color: 'green', fontSize: 18},
  cancelText: {color: 'red', fontSize: 18},
});
