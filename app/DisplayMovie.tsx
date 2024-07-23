import RenderMovie from "@/components/RenderMovie";
import Style from "@/styles/Style";
import { Movie } from "@/types/movie";
import { RouteProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import React, { FC, useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";


export type ParamList = {
  Movie: { movie: Movie };
};

interface DisplayMovieProps {
  route: RouteProp<ParamList, "Movie">;
}


const DisplayMovie: FC<DisplayMovieProps> = ({ route }) => {
  const { movie } = route.params;
  const navigation = useNavigation();


  const onPressPlay = () => {
    navigation.navigate('FullScreenMovie', { movie });
  };
  
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <Button title="Return" onPress={() => navigation.goBack()} />
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
