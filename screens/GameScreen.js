import { Text, View, StyleSheet } from 'react-native';

const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>
                "Opponnent's guess"
            </Text>
            <View>
                <Text>Higher or lower</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    }
});

export default GameScreen;

