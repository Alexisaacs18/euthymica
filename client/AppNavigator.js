import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NumberTest from "./Components/Tests/NumberTest";
import Tests from "./Components/Tests/Tests";
import HomeScreen from "./Components/MainComponents/HomeScreen";
import Meditation from "./Components/Meditation/Meditation";
import InsightTimer from "./Components/Meditation/InsightTimer";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home Screen">
      <Stack.Screen name="Home Screen" component={HomeScreen} />
      <Stack.Screen name="Meditation Screen" component={Meditation} />
      <Stack.Screen name="Insight Timer" component={InsightTimer} />
      <Stack.Screen name="Test Screen" component={Tests} />
      <Stack.Screen name="Number Test" component={NumberTest} />
    </Stack.Navigator>
  );
}
