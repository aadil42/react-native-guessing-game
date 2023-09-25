import { View, Text, StyleSheet, Pressable } from 'react-native';
import Colors from '../constants/Colors';

const BlurButton = ({title, onPress}) => {
    const pressHandler = () => {
        onPress();
    }
    return (
        <View style={styles.pressableContainer}>
            <Pressable onPress={pressHandler} style={styles.btn}>
                <Text style={styles.btnText}>{title}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    btnText: {
        color: Colors.white500,
        textAlign: "center"
    },
    pressableContainer: {
        margin: 4,
        borderRadius: 28,
        overflow: "hidden",
        width: "45%"
    },
    btn: {
        backgroundColor: Colors.primary500,
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
});

export default BlurButton;

