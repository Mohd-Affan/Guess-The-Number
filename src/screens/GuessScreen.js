import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Card from '../components/Card';
import SelectedNumber from '../components/SelectedNumber';

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

export default function GuessScreen(props) {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, props.userChoice),
  ); //so that we can change/update the guess of the computer when user selects lower or higher number...props.userChoice is the no. user entered that we want to ignore in the first guess//

  return (
    <View>
      <SelectedNumber>{currentGuess}</SelectedNumber>
      <Card style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.lower}>
          <Text style={styles.lowerText}>Lower</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.higher}>
          <Text style={styles.higherText}>Higher</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {flexDirection: 'row'},
  lower: {},
  lowerText: {},
  higher: {},
  higherText: {},
});
