import { View, TextInput, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/Card';
import Title from '../components/Title';
import Colors from '../constants/Colors';

const StartGameScreen = ({onPick}) =>  {

    const [enteredNumber, setEnteredNumber] = useState('');
    
    const enteredNumberHandler = (inputText) => {
        setEnteredNumber(inputText);
    }

    const resetInput = () => {
        setEnteredNumber('');
    }

    const confirmHandler = () => {
        if(!enteredNumber || 
           isNaN(enteredNumber) || 
           +enteredNumber > 99 ||
           +enteredNumber < 1) {
            Alert.alert(
                'Invalid Input', // title
                'Input must be between 1 to 99', // message
                [{text: 'Okay', style: 'destructive', onPress: resetInput}] // btns
            );
            return;
           };
           onPick(+enteredNumber);
    }



    return (
        <View style={styles.container}>
            <Title text="Guess my Number" incomingStyles={[styles.title]} />
            <Card incomingStyles={[styles.marginTop30]}>
                <View style={styles.inputContainer}>
                <TextInput  
                            style={styles.textInput}  
                            placeholder=""
                            placeholderTextColor={Colors.accent800}
                            maxLength={2}
                            keyboardType='number-pad'
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={enteredNumber}
                            onChangeText={enteredNumberHandler}
                    /> 
                </View>  
                <View style={styles.btnContainer}>
                    <PrimaryButton onPress={resetInput} title="Reset" />
                    <PrimaryButton onPress={confirmHandler} title="Confirm" />
                </View>               
            </Card>
        </View>    
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 16
    },  
    textInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent800,
        borderBottomWidth: 2,
        color: Colors.accent800,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    marginTop30: {
        marginTop: 30
    },
    container: {
        alignItems: 'center',
    }, 
    title: {
        marginTop: 30,
        width: "80%",
        marginTop: 100
    }
});