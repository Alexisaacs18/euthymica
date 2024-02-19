import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function NumberTest() {
  const [number, setNumber] = useState(null);
  const [answer, setAnswer] = useState(null);

  function generateNumber() {
    setNumber(Math.floor(Math.random() * 10));
  }

  function startTest() {
    let count = 0;

    const interval = setInterval(() => {
      count++;

      if (count > 8) {
        clearInterval(interval);
        setNumber(null);
      } else {
        generateNumber();
      }
    }, 1000);

    return () => clearInterval(interval);
  }

  function handleSubmit() {}

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button title="Start Test" onPress={startTest} />
        {number >= 0 ? <Text>{number}</Text> : <View></View>}
      </View>
      <View style={styles.form}>
        <Text>New Item:</Text>
        <TextInput
          value={answer}
          onChangeText={setAnswer}
          placeholder="Enter Answer"
        />
        <Button title="Submit" onPress={handleSubmit} />
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
