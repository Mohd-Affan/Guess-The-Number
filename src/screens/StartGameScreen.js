import React, {useState} from 'react';
import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import SelectedNumber from '../components/SelectedNumber';
import colors from '../constants/colors';

export default function StartGameScreen(props) {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const handleInput = (input) => {
    setEnteredValue(input.replace(/[^0-9]/g, ''));
  };
  //the above line is called regular expressions
  /*   ^ this carrot or line basically means replace anything that is NOT between 0-9 with empty strings (so that user can type something else)
and g means globally, that is replace it if user types something that is not b/w 0-9 at the beginning, middle or end.*/

  const handleReset = () => {
    setEnteredValue('');
    setConfirmed(false); //if we dont use this line of code then the output won't disappear on press of reset
  };

  const handleConfirm = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //ask why we dont use return in next line.(i used return in next line and removed return from last line, still it was working fine.)
      Alert.alert('Invalid Number!', 'Number has to be between 1-99', [
        {text: 'Okay', style: 'default', onPress: handleReset},
      ]);
      return; // we could also use return null; ...it's working same, still ask someone....if i am removing return, output is getting shown.
    }
    setConfirmed(true);
    setEnteredValue('');
    setSelectedNumber(chosenNumber);
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    //basically it means if confirmed state is true (i.e. setConfirmed(true)) then return..., also ask why dont we use return keyword here.
    confirmedOutput = (
      <Card style={styles.startGameContainer}>
        <Text style={styles.startGameText}>You Selected:</Text>
        <SelectedNumber>{selectedNumber}</SelectedNumber>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => props.onStartGame(selectedNumber)}>
          <Text style={styles.startButtonText}>Start Game</Text>
        </TouchableOpacity>
      </Card>
    );
  }

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
          keyboardType="numeric"
          maxLength={2}
          onChangeText={handleInput}
          value={enteredValue}
        />
        <View style={styles.buttons}>
          <TouchableOpacity onPress={handleReset}>
            <Text style={styles.resetText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleConfirm}>
            <Text style={styles.confirmText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </Card>
      {confirmedOutput}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainHeading: {
    alignItems: 'center',
    marginTop: 25,
  },
  mainHeadingText: {
    fontSize: 20,
  },
  subHeading: {
    marginTop: 10,
    alignItems: 'center',
  },
  headingText: {
    fontSize: 20,
  },
  subHeadingText: {
    fontSize: 15,
    marginTop: 20,
  },
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
  resetText: {
    color: 'blue',
    fontSize: 18,
  },
  confirmText: {
    color: 'green',
    fontSize: 18,
  },
  startGameContainer: {
    marginHorizontal: '30%',
    alignItems: 'center',
  },
  startGameText: {marginVertical: 10},
  startButton: {},
  startButtonText: {fontSize: 20, fontWeight: 'bold', color: 'blue'},
});
