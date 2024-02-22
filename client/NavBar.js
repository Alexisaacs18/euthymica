import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Components/MainComponents/HomeScreen";
import SettingsScreen from "./Components/MainComponents/SettingsScreen";
import Chat from "./Components/MainComponents/Chat";
import AppNavigator from "./AppNavigator";

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={AppNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
