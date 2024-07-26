import RenderMovie from "@/components/RenderMovie";
import Style from "@/styles/Style";
import { Movie } from "@/types/movie";
import { RouteProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import React, { FC, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from 'react-native-paper';


export type ParamList = {
  Movie: { movie: Movie };
};

interface DisplayMovieProps {
  route: RouteProp<ParamList, "Movie">;
}


const DisplayMovie = ({ route }: DisplayMovieProps) => {
  const { movie } = route.params;
  const navigation = useNavigation();


  const onPressPlay = () => {
    navigation.navigate('FullScreenMovie', { movie });
  };
  
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <Button icon="arrow-left" mode="contained" style={{width: 200, padding: 10,  borderRadius: 10}} onPress={() => navigation.goBack()}>Return</Button>
        <RenderMovie movie={movie} onPress={onPressPlay} />
        </ScrollView>
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
    color: "white"
  },
});
export default DisplayMovie;
