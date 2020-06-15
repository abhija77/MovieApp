import * as React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { FlatList } from "react-native-gesture-handler";
import { getPopularMovies } from "../services/GetMovieApi";
import Item from "./ItemListMovie";

export default class ListMovieScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  getList = () => {
    getPopularMovies().then((resp) => {
      console.log("resp success:-", resp);
      this.setState({ data: resp.data.results });
    });
  };

  componentDidMount() {
    this.getList();
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>
    );
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
