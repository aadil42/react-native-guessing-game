import { View, Text, StyleSheet, Pressable } from 'react-native';

const PrimaryButton = ({title}) => {
    const pressHandler = () => {
        console.log('Pressed!');
    }
    return (
        <View style={styles.pressableContainer}>
            <Pressable onPress={pressHandler} style={
                ({pressed}) => {
                   return pressed ? [styles.btn, styles.pressedBtn] : styles.btn
                }
            } android_ripple={{color: '#3b011e'}}>
                <Text style={styles.btnText}>{title}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    btnText: {
        color: "#ffffff",
        textAlign: "center"
    },
    pressableContainer: {
        margin: 4,
        borderRadius: 28,
        overflow: "hidden",
        width: "45%"
    },
    btn: {
        backgroundColor: "#54022b",
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    // for ios
    pressedBtn: {
        opacity: ".75"
    }
});

export default PrimaryButton;

