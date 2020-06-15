// In App.js in a new project

import * as React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthTabScreen from "./screens/AuthTabScreen";
import HomeTabScreen from "./screens/HomeTabScreen";
import { FlatList } from "react-native-gesture-handler";
import Constants from "expo-constants";
import Item from "./screens/ItemListMovie";
import { getPopularMovies } from "./services/GetMovieApi";
import { axios } from "axios";
import { isSigned, signed } from "./services/store";

const Stack = createStackNavigator();

let DATA = null;

/*function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
    /*<NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeTabScreen}
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen
          name="Auth"
          component={AuthTabScreen}
          options={{
            title: "Authentification",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>*/
/* );
}*/

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null, isSigned: false };
  }

  getList = () => {
    getPopularMovies().then((resp) => {
      console.log("resp success:-", resp);
      this.setState({ data: resp.data.results });
    });
  };

  componentDidMount() {
    //this.getList();

    setTimeout(() => {
      this.setState({ isSigned: true });
    }, 2000);
  }

  render() {
    /*if (this.state.data) {
      return (
        
      );
    } else {
      return <Text>jebf</Text>;
    }*/

    if (this.state.isSigned) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeTabScreen}
              options={{
                title: "Home",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Auth"
              component={AuthTabScreen}
              options={{
                title: "Authentification",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
