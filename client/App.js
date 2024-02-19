import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import NavigationBar from "react-native-navigation-bar";
import AppNavigator from "./AppNavigator";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Euthymica</Text>
      <View>
        <AppNavigator />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: 30,
    alignSelf: "center",
  },
  body: {
    marginLeft: 20,
    marginTop: 30,
  },
  form: {
    alignItems: "center",
    fontSize: 14,
    marginTop: 20,
  },
});
