import { StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";
const Card = ({children, incomingStyles}) => {
    return (
      <View style={[styles.container, [...incomingStyles]]}>      
        {children}      
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary700,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    }
})

export default Card;