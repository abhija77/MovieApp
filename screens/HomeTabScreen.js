import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import ListMovieScreen from "./ListMovieScreen";
import DetailsScreen from "./DetailsScreen";

const Tab = createBottomTabNavigator();

export default function AuthTabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="List"
        component={ListMovieScreen}
        options={{
          title: "My List",
        }}
      />
    </Tab.Navigator>
  );
}
