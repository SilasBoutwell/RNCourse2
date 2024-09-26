import { StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function GameOverScreen({Guesses}) {
  return <View style={styles.screen}>
    <View style={styles.container}>
      <Text style={styles.title}>Game Over</Text>
      <Text style={styles.subtitle}>Your device took {Guesses} guesses to find your number</Text>
    </View>
  </View>
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
    marginTop: 200,
    marginHorizontal: 16,
  },
  container: {
    backgroundColor: Colors.primary800,
    borderRadius: 12,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 24,
    borderRadius: 6,
    color: Colors.accent500,
    textAlign: 'center',
  },
  subtitle: {
    color: 'white',
    marginTop: 16,
  }
});