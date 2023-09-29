import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const PrimaryButton = ({title, onPress, useIcon, incomingStyles}) => {
    const pressHandler = () => {
        onPress();
    }
    
    let output = <Text style={styles.btnText}>{title}</Text>;
    
    if(useIcon) {
        output = <Ionicons style={styles.btnText} name={useIcon.icon} size={24} color="white" />;
    }
    return (
       <View style={useIcon ? styles.pressableIconContainer : styles.pressableContainer}>
        <Pressable onPress={pressHandler} 
        style={
            ({pressed}) => {
            if(incomingStyles) {
                return pressed ? [styles.btn, ...incomingStyles, styles.pressedBtn] : [styles.btn, ...incomingStyles]
            }
            return pressed ? [styles.btn, styles.pressedBtn] : [styles.btn]
        }
        } android_ripple={{color: Colors.primary800}}>
            {output}
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
    pressableIconContainer: {
        margin: 4,
        borderRadius: 28,
        overflow: "hidden",
        width: 80
    },
    btn: {
        backgroundColor: Colors.primary600,
        paddingHorizontal: 8,
        paddingVertical: 8,
    },  
    // for ios
    pressedBtn: {
        opacity: ".75"
    }
});

export default PrimaryButton;

