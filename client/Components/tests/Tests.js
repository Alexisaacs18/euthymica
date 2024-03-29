import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Tests({ navigation }) {
  function navigateToTest() {
    navigation.navigate("Number Test");
  }
  return (
    <View style={styles.container}>
      <Button title="Number Test" onPress={navigateToTest} />
      <Text>This is where the tests will go</Text>
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
