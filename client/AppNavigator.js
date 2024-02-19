import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import NumberTest from "./Components/tests/NumberTest";
import Tests from "./Components/tests/Tests";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Test Screen" component={Tests} />
        {/* <Stack.Screen name="Number Test" component={NumberTest} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
