import { StyleSheet, Text, View, Image } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.screen}>
      <Title style={styles.title}>GAME OVER!</Title>
      <View style={styles.imageContaienr}>
        <Image source={require("../assets/images/success.png")} style={styles.image} />
      </View>
      <Text style={styles.summaryText}>
        Your device took <Text style={styles.highlight}>{roundsNumber}</Text> tries to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContaienr: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  }, 
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  }
});