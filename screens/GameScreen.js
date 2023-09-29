import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Alert, FlatList } from 'react-native';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/Colors';
import Card from '../components/Card';
import GuessLog from '../components/GuessLog';

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
                     resetGame,
                     MaxGuessCount}) => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [guess, setGuess] = useState(generateGuess(min,max,pickedNumber));
    const [guessLog, setGuessLog] = useState([]);

    useEffect(() => {
        if(guess === pickedNumber) {
            makeComputerWinner(true);
        }
        setGuessLog((currentLog) => [guess, ...currentLog]);
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

            <Title incomingStyles={[styles.secondaryTitle, styles.borderRadius20]}  text="Computer's guess" />
            <View style={styles.numContainer}>
                <Title incomingStyles={[styles.num, styles.borderRadius20]} text={guess}/>
            </View>

            <Card incomingStyles={[]}>
                <Title incomingStyles={[styles.title, styles.noBorders, styles.noPadding]} text="High or Low?" />
                    <View style={styles.btnContainer}>                
                    {guessCount < MaxGuessCount && 
                        <PrimaryButton onPress={smallGuessHandler} useIcon={{icon: 'md-remove'}} />
                    }
                    { guessCount < MaxGuessCount && 
                        <PrimaryButton onPress={bigGuessHandler} useIcon={{icon: 'md-add'}} />
                    }
                    {guessCount === MaxGuessCount && 
                    <PrimaryButton incomingStyles={[styles.blurBtn]} onPress={onBlurPress} useIcon={{icon: 'md-remove'}} />
                    }
                    {guessCount === MaxGuessCount && 
                    <PrimaryButton incomingStyles={[styles.blurBtn]} onPress={onBlurPress} useIcon={{icon: 'md-add'}} />
                    }
                    </View>
            </Card>

            <View>
            {guessCount === MaxGuessCount && 
                    <Text style={styles.smallText}> 
                        Number Was {pickedNumber}
                    </Text>
            }
            </View>

            <View style={styles.btn2Container}>
                {guessCount === MaxGuessCount && <PrimaryButton onPress={resetGame} title="Reset" />}
            </View>

            <View>
                <Text style={styles.smallText}> 
                    Guess Log
                </Text>
            </View>

            <FlatList 
                    data={guessLog}
                    renderItem={(itemData) => {
                        return (
                            <View style={styles.logContainer}>
                                <GuessLog guessNumber={guessLog.length - itemData.index} incomingStyles={[styles.logText]} guess={itemData.item} />
                            </View>
                        )
                    }}
                    keyExtractor={(item) => item}
            />
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
    btn2Container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
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
        marginTop: 10,
        paddingTop: 5,
        paddingBottom: 0,
        width: "40%"
    },
    guessNum: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 4,
        borderColor: Colors.white500,
        color: Colors.white500,
        width: "70%",
    },
    secondaryTitle: {
        textAlign: 'center',
        fontSize: 20,
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
    },
    smallText: {
        fontSize: 20,
        color: Colors.black500,
        textAlign: 'center',
        marginTop: 5
    },
    logText: {
        fontSize: 20,
        paddingTop: 5,
        paddingBottom: 0,
        width: "50%",
        marginTop: 0,
        marginBottom: 10
    },
    logContainer: {
        alignItems: 'center',
        marginTop: 10
    },
    blurBtn: {
        backgroundColor: Colors.primary500,
    }
});

export default GameScreen;

