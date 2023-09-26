import { Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const Title = ({text, incomingStyles}) => {
    return (
        <Text style={[styles.title, [...incomingStyles]]}>{text}</Text>
    );
}

const styles = StyleSheet.create({
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
    }
});
export default Title;