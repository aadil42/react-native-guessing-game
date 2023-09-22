import {  StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
// just to set upstream
export default function App() {

  const [pickedNumber, setPickedNumber] = useState();

  const pickedNumberHandler = (picked) => {
    setPickedNumber(picked);
  }

  let screen = <StartGameScreen onPick={pickedNumberHandler} />
  if(pickedNumber) {
    screen = <GameScreen />
  }

  return (
    <LinearGradient colors={["#72063c", "#ddb52f"]} style={styles.appContainer}>
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