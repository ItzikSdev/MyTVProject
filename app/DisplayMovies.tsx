import MyButton from "@/components/MyButton";
import Style from "@/styles/Style";
import { Stack } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import movies from "../movies"
import { Movie } from "@/types/movie";


const DisplayMovies = () => {
  let [count, setCount] = useState<number>(0);

  const onPress = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const displayMovies = () => {
    return movies.flatMap((listOfMovies, i) => listOfMovies.map((movie: Movie, j: number) => <MyButton key={count++} movie={movie} />));
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>{displayMovies()}</ScrollView>
        </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: Style.backgroundColor,
    },
    text: {
      fontSize: 42,
    },
  });
export default DisplayMovies;
