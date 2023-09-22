import { Text, StyleSheet } from 'react-native';

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
        borderColor: "#ddb52f",
        color: "#ddb52f",
        marginTop: 30,
        padding: 10,
        paddingTop: 14
    }
});

export default Title;