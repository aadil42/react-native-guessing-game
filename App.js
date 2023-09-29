import {  StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import MaxGuessCount from './constants/MaxGuessCount';

// just to set upstream
import Colors from './constants/Colors';

export default function App() {

  const [pickedNumber, setPickedNumber] = useState();
  const [didComputerWin, setDidComputerWin] = useState(false);
  const [guessCount, setGuessCount] = useState(1);

  const resetGame = () => {
    setPickedNumber(null);
    setDidComputerWin(false);
    setGuessCount(1);
  }

  const pickedNumberHandler = (picked) => {
    setPickedNumber(picked);
  }

  let screen = <StartGameScreen onPick={pickedNumberHandler} />
  if(pickedNumber) {
    screen = <GameScreen MaxGuessCount={MaxGuessCount} resetGame={resetGame} guessCount={guessCount} setGuessCount={setGuessCount} makeComputerWinner={setDidComputerWin} pickedNumber={pickedNumber} />
  }
  if(didComputerWin) {
    screen = <GameOverScreen restartGame={resetGame} guessCount={guessCount} guessedNumber={pickedNumber} />
  }



  return (
    <LinearGradient colors={[Colors.primary500, Colors.accent800]} style={styles.appContainer}>
      <ImageBackground 
        source={require('./assets/images/background.png')} 
        resizeMode="cover"
        style={styles.appContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.appContainer}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
  backgroundImage: {
    opacity: .25
  }
});