import { StyleSheet } from "react-native";

const Card = ({children}) => {
    return (
      <View style={styles.container}>      
        {children}      
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
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