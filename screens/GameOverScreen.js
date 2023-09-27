import { View, StyleSheet, ImageBackground, Image } from 'react-native';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/Colors';

const GameOverScreen = ({guessedNumber, guessCount, restartGame}) => {

    const startAgain = () => {
        restartGame();
    }

    return (
            <View style={styles.screen}>
                <View style={styles.imageContainer}>
                    <Image 
                    style={styles.image}
                    source={require('../assets/images/success.png')}
                    />
                </View>
                <View>
                    <Title incomingStyles={[]} styles={styles.title}  text="Computer Won!!" />
                </View>
                
                <View>
                    <Title incomingStyles={[]}  styles={styles.title} text={`this is the computer's guess: ${guessedNumber}`} />
                </View>
                
                <View style={styles.countContainer}>
                    <Title incomingStyles={[]} styles={styles.guessNum} text="Total Guess taken"/>
                    <Title incomingStyles={[]} styles={styles.guessNum} text={guessCount}/>
                </View>
                
                <View style={styles.btnContainer}>
                    <PrimaryButton title="Reset" onPress={startAgain} />
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1
    },
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
    },
    imageContainer: {
        alignItems: 'center'
    },  
    image: {
        width: 150,
        height: 150,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    }
});

export default GameOverScreen;

