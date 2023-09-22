import { View, Text, StyleSheet, Pressable } from 'react-native';

const PrimaryButton = ({title, onPress}) => {
    const pressHandler = () => {
        onPress();
    }
    return (
        <View style={styles.pressableContainer}>
            <Pressable onPress={pressHandler} style={
                ({pressed}) => {
                   return pressed ? [styles.btn, styles.pressedBtn] : styles.btn
                }
            } android_ripple={{color: '#5d0330'}}>
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
        backgroundColor: "#75093f",
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    // for ios
    pressedBtn: {
        opacity: ".75"
    }
});

export default PrimaryButton;

