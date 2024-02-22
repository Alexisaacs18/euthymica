import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import NavBar from "./NavBar";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <NavBar />
      </NavigationContainer>
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
