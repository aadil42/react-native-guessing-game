import { Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
const Title = ({text}) => {
    return (
        <Text style={styles.title}>{text}</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        borderWidth: 4,
        borderColor: Colors.accent800,
        color: Colors.accent800,
        marginTop: 30,
        padding: 10,
        paddingTop: 14
    }
});

export default Title;