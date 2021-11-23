import React, {useState, useRef, useEffect} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
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
  const [guesses, setguesses] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  useEffect(() => {
    if (currentGuess === props.userChoice);
    props.onGameOver(guesses);
  });

  const handleNextGuess = (direction) => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) || //it means if the current guess is already less than chosen number then...
      (direction === 'higher') & (currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie", "that's not right!", [
        {text: 'Sorry', style: 'cancel'},
      ]);
      return;
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextGuess = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextGuess);
    setRounds((currentRounds) => {
      currentRounds + 1;
    });
  };

  return (
    <View>
      <SelectedNumber>{currentGuess}</SelectedNumber>
      <Card style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.lower}
          onPress={handleNextGuess.bind(this, 'lower')}>
          <Text style={styles.lowerText}>LOWER</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.higher}
          onPress={handleNextGuess.bind(this, 'higher')}>
          <Text style={styles.higherText}>HIGHER</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  lower: {},
  lowerText: {fontSize: 18, color: 'blue'},
  higher: {},
  higherText: {fontSize: 18, color: 'blue'},
});
