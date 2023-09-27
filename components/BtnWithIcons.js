import { View, Text, StyleSheet, Pressable } from 'react-native';
import Colors from '../constants/Colors';

const BtnWithIcons = ({onPress, children}) => {
    const pressHandler = () => {
        onPress();
    }
    return (
        <View style={styles.pressableContainer}>
            <Pressable onPress={pressHandler} style={
                ({pressed}) => {
                   return pressed ? [styles.btn, styles.pressedBtn] : styles.btn
                }
            } android_ripple={{color: Colors.primary800}}>
                {children}
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
        width: 80,
        alignItems: 'center',
        backgroundColor: Colors.primary600,
    },
    btn: {
        width: "100%",
        paddingHorizontal: 8,
        paddingVertical: 8,
        alignItems: 'center'
    },
    // for ios
    pressedBtn: {
        opacity: ".75"
    }
});

export default BtnWithIcons;
