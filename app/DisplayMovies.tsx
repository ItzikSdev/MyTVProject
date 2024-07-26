import MyButton from "@/components/MyButton";
import Style from "@/styles/Style";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import movies from "../movies";
import { Movie } from "@/types/movie";
import { DataTable } from "react-native-paper";

const DisplayMovies = () => {
  let [count, setCount] = useState<number>(0);

  const onPress = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const displayMovies = () => {
    return movies.flatMap((listOfMovies, i) => (
      // render pages
      <DataTable.Row>
        {listOfMovies.map((movie: Movie, j: number) => (
          // redner page
          <DataTable.Cell numeric>
            <View style={{ display:"flex", margin:20, width:0 }}>
              <MyButton key={count++} movie={movie} />
            </View>
          </DataTable.Cell>
        ))}
      </DataTable.Row>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>{displayMovies()}</ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    display: "flex",
    backgroundColor: Style.backgroundColor,
    // padding: 20,
  },
  text: {
    fontSize: 42,
  },
});
export default DisplayMovies;
