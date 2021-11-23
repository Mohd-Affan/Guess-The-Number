// import React, {Component} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import Header from './src/components/Header';
// import GuessScreen from './src/screens/GuessScreen';
// import StartGameScreen from './src/screens/StartGameScreen';

// export default class App extends Component {

// const [state, setstate] = useState(initialState)

//   render() {
//     return (
//       <View style={styles.container}>
//         <Header headerText="Guess The Number" />
//         <StartGameScreen />
//         {/* <GuessScreen /> */}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {flex: 1},
// });

import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from './src/components/Header';
import SelectedNumber from './src/components/SelectedNumber';
import GuessScreen from './src/screens/GuessScreen';
import StartGameScreen from './src/screens/StartGameScreen';
import GameOverScreen from './src/screens/GameOverScreen';

export default function App() {
  const [inputNumber, setInputNumber] = useState(); // we are using this state so that we can get the selected number from the stargamescreen and pass it to the guessScreen as a reference or props.userChoice i.e as an argument so that computer doesn't guess the user or selectedNumber in the first guess itself
  const [rounds, setRounds] = useState(0);

  const handleStartGame = (selectedNumber) => {
    setInputNumber(selectedNumber);
    setRounds(0); // so that when we go back to start game screen to start a NEW game then we can reset the number of guesses as 0.
  };

  const handleGameOver = (numberOfRounds) => {
    setRounds(numberOfRounds);
  };

  let display = <StartGameScreen onStartGame={handleStartGame} />;

  if (inputNumber && rounds <= 0) {
    //since the game is runing, hence total guesses have not been made yet.
    display = (
      <GuessScreen userChoice={inputNumber} onGameOver={handleGameOver} />
    );
  } else if (rounds > 0) {
    display = <GameOverScreen />;
  }

  return (
    <View style={styles.container}>
      <Header headerText="Guess The Number" />
      {display}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
