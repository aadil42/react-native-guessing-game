import { Text, StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors';

const GuessLog = ({guess, incomingStyles, guessNumber}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                #{guessNumber}
            </Text>
            <Text style={styles.text}>
                Guess {guess}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: Colors.black500,
        fontSize:  20
    },
    container: {
        backgroundColor: Colors.accent800,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
        borderRadius: 12,
        borderWidth:  1,
        borderColor: Colors.black500
    }
});
export default GuessLog;