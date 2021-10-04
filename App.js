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

export default function App() {
  const [inputNumber, setInputNumber] = useState();

  const handleStartGame = (selectedNumber) => {
    setInputNumber(selectedNumber);
  };

  let display = <StartGameScreen onStartGame={handleStartGame} />;

  if (inputNumber) {
    display = <GuessScreen userChoice={inputNumber} />;
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
