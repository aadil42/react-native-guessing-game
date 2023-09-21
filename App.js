import { View, StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#ae9612dc",
    flex: 1
  }
});