import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Meditation({ navigation }) {
  function navigateToInsightTimer() {
    navigation.navigate("Insight Timer");
  }
  return (
    <View style={styles.container}>
      <Button title="Insight Timer" onPress={navigateToInsightTimer} />
      <Text>Different types of meditation</Text>
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
