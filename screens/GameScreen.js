import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import BlurButton from '../components/BlurButton';
import Colors from '../constants/Colors';

const generateGuess = (min, max, exclude) => {
    let guess =  Math.floor(Math.random() * (max - min)) + min;
    console.log(min,max,guess);
    if(exclude === guess) {
        return generateGuess(min, max, exclude);
    }
    return guess;
}
const lieTitle = `Don't lie!`;
const lieMessage = `You know that this is wrong...`;
const GameScreen = ({pickedNumber}) => {
    const [guess, setGuess] = useState();
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [guessCount, setGuessCount] = useState(1);

    useEffect(() => {
        setGuess(generateGuess(min,max,pickedNumber));
    },[]);

    const onBlurPress = () => {
        Alert.alert('Out of Guesses', 'Reload the App to reste the guess', [
            { text: 'Ok', style: 'cancel' },
          ]);
    }

    const bigGuessHandler = () => {
        console.log('big runs');
        if(guess < pickedNumber) {
            Alert.alert(lieTitle, lieMessage, [
                { text: 'Sorry!', style: 'cancel' },
            ]);
            console.log('lier');
                return;
        }
        setGuess(generateGuess(min, guess, guess));
        setMax(guess);
        setGuessCount((count) => count+1);
    }

    const smallGuessHandler = () => {
        console.log('small runs');
        if(guess > pickedNumber) {
            Alert.alert(lieTitle, lieMessage, [
                { text: 'Sorry!', style: 'cancel' },
              ]);
            console.log('lier');
            return;
        }
        setGuess(generateGuess(guess, max, guess));
        setMin(guess);
        setGuessCount((count) => count+1);
    }

    return (
        <View style={styles.screen}>

            <Title styles={styles.title}  text="Opponent's guess" />
            <View style={styles.numContainer}>
                <Title styles={styles.num} text={guess}/>
            </View>
            <View>
                {guess === pickedNumber && <Text>Computer Won</Text>}
                <View style={styles.btnContainer}>
                {guessCount < 4 && <PrimaryButton onPress={smallGuessHandler} title="Too small" />}
                {guessCount < 4 && <PrimaryButton onPress={bigGuessHandler} title="Too big" />}

                {guessCount > 3 && <BlurButton onPress={onBlurPress} title="Too small" />}
                {guessCount > 3 && <BlurButton onPress={onBlurPress} title="Too big" />}
                </View>
            </View>

            <View style={styles.countContainer}>
                <Title styles={styles.guessNum} text="Guess Count"/>
                <Title styles={styles.guessNum} text={guessCount}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        borderWidth: 4,
        borderColor: Colors.white500,
        color: Colors.white500,
        marginTop: 30,
        padding: 10,
        paddingTop: 14
    },
    numContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },  
    num: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 4,
        borderColor: Colors.accent800,
        color: Colors.accent800,
        marginTop: 30,
        padding: 10,
        paddingTop: 14,
        width: "60%"
    },
    countContainer: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 20
    },
    guessNum: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 4,
        borderColor: Colors.white500,
        color: Colors.white500,
        marginTop: 30,
        padding: 10,
        paddingTop: 14,
        width: "50%",
    }
});

export default GameScreen;

