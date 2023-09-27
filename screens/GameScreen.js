import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import BlurButton from '../components/BlurButton';
import Colors from '../constants/Colors';
import Card from '../components/Card';
import BtnWithIcons  from '../components/BtnWithIcons';

import { Ionicons } from '@expo/vector-icons';

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
        // setGuess(generateGuess(min, guess, guess));
        // setMax(guess);
        setGuess(pickedNumber)
        setGuessCount((count) => count+1);
    }

    const smallGuessHandler = () => {
        if(guess > pickedNumber) {
            Alert.alert(lieTitle, lieMessage, [
                { text: 'Sorry!', style: 'cancel' },
              ]);
            return;
        }
        // setGuess(generateGuess(guess, max, guess));
        // setMin(guess);
        setGuess(pickedNumber)
        setGuessCount((count) => count+1);
    }

    return (
        <View style={styles.screen}>

            <Title incomingStyles={[styles.secondaryTitle, styles.borderRadius20]}  text="Computer's guess" />
            <View style={styles.numContainer}>
                <Title incomingStyles={[styles.num, styles.borderRadius20]} text={guess}/>
            </View>

            <Card incomingStyles={[]}>
                <Title incomingStyles={[styles.title, styles.noBorders, styles.noPadding]} text="High or Low?" />
                <View style={styles.btnContainer}>
                {/* {guessCount < 3 && <PrimaryButton onPress={smallGuessHandler} title="Too small" />}
                {guessCount < 3 && <PrimaryButton onPress={bigGuessHandler} title="Too big" />} */}
                
                {guessCount < 3 && 
                <BtnWithIcons onPress={smallGuessHandler}>
                    <Ionicons  name="md-remove" size={24} color="white" />
                </BtnWithIcons>
                }
                {guessCount < 3 && 
                <BtnWithIcons onPress={bigGuessHandler}>
                    <Ionicons  name="md-add" size={24} color="white" />
                </BtnWithIcons>
                }

                {guessCount === 3 && 
                <BtnWithIcons onPress={onBlurPress}>
                    <Ionicons  name="md-remove" size={24} color="white" />
                </BtnWithIcons>
                }

                {guessCount === 3 && 
                <BtnWithIcons onPress={onBlurPress}>
                    <Ionicons  name="md-add" size={24} color="white" />
                </BtnWithIcons>
                }
                </View>
            </Card>

            <View style={styles.countContainer}>
                <Title incomingStyles={[styles.guessNum, 
                                        styles.borderRadius20,
                                        ]} text="Guess Count"/>
                <Title incomingStyles={[styles.guessNum, 
                                        styles.borderRadius20,
                                        ]} text={guessCount}/>
            </View>

            <View>
            {guessCount === 3 && <Title incomingStyles={[styles.borderRadius20]} 
                        text={`Number was ${pickedNumber}`} />}
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
        marginTop: 20,
    },
    numContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },  
    num: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        borderWidth: 4,
        borderColor: Colors.accent800,
        color: Colors.accent800,
        marginTop: 30,
        paddingTop: 14,
        paddingBottom: 8,
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
        width: "48%",
        padding: 0,
        paddingBottom: 14,
        paddingHorizontal: 8
    },
    secondaryTitle: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        borderWidth: 4,
        borderColor: Colors.accent800,
        color: Colors.accent800,
        marginTop: 30,
        padding:  0,
        paddingTop: 14,
        paddingBottom: 8,
    },
    noBorders: {
        borderWidth: 0
    },
    noPadding: {
        padding: 0,
        paddingTop: 0
    },
    borderRadius20: {
        borderRadius: 20
    }
});

export default GameScreen;

