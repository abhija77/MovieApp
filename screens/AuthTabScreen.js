import * as React from "react";
import LoginScreen from "./LoginScreen";
import CreateAccountScreen from "./CreateAccountScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function AuthTabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginScreen} />
    </Tab.Navigator>
  );
}
