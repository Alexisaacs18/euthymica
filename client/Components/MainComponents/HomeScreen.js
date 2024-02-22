import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  function navigateToTestScreen() {
    navigation.navigate("Test Screen");
  }
  function navigateToMeditationScreen() {
    navigation.navigate("Meditation Screen");
  }
  return (
    <View style={styles.container}>
      <Button title="Tests" onPress={navigateToTestScreen} />
      <Button title="Meditation" onPress={navigateToMeditationScreen} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
