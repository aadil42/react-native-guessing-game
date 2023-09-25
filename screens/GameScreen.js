import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import BlurButton from '../components/BlurButton';
import Colors from '../constants/Colors';

const generateGuess = (min, max, exclude) => {
    let guess =  Math.floor(Math.random() * (max - min)) + min;
    if(exclude === guess) {
        return generateGuess(min, max, exclude);
    }
    return guess;
}
const lieTitle = `Don't lie!`;
const lieMessage = `You know that this is wrong...`;
const GameScreen = ({pickedNumber, 
                     makeComputerWinner, 
                     setGuessCount, 
                     guessCount,
                     resetGame}) => {
    const [guess, setGuess] = useState();
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);


    useEffect(() => {
        setGuess(generateGuess(min,max,pickedNumber));
    },[]);

    useEffect(() => {
        if(guess === pickedNumber) {
            makeComputerWinner(true);
        }
    },[guess]);

    const onBlurPress = () => {
        Alert.alert('Out of Guesses', 'Reload the App to reste the guess', [
            { text: 'Ok', style: 'cancel' },
          ]);
    }

    const bigGuessHandler = () => {
        if(guess < pickedNumber) {
            Alert.alert(lieTitle, lieMessage, [
                { text: 'Sorry!', style: 'cancel' },
            ]);
            return;
        }
        setGuess(generateGuess(min, guess, guess));
        setMax(guess);
        setGuessCount((count) => count+1);
    }

    const smallGuessHandler = () => {
        if(guess > pickedNumber) {
            Alert.alert(lieTitle, lieMessage, [
                { text: 'Sorry!', style: 'cancel' },
              ]);
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
                <View style={styles.btnContainer}>
                {guessCount < 3 && <PrimaryButton onPress={smallGuessHandler} title="Too small" />}
                {guessCount < 3 && <PrimaryButton onPress={bigGuessHandler} title="Too big" />}

                {guessCount === 3 && <BlurButton onPress={onBlurPress} title="Too small" />}
                {guessCount === 3 && <BlurButton onPress={onBlurPress} title="Too big" />}
                </View>
            </View>

            <View style={styles.countContainer}>
                <Title styles={styles.guessNum} text="Guess Count"/>
                <Title styles={styles.guessNum} text={guessCount}/>
            </View>

            <View style={styles.btnContainer}>
                {guessCount === 3 && <PrimaryButton onPress={resetGame} title="Reset" />}
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

