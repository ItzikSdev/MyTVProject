import Style from "@/styles/Style";
import React, { FC, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Movie } from "@/types/movie";

interface MyButtonProps {
  movie: Movie,
}

const MyButton: FC<MyButtonProps> = ({movie}) => {
  const [count, setCount] = useState<number>(0);
  const navigation = useNavigation();
  

  const onPress = () => {
    setCount((prevCount) => prevCount + 1);
    navigation.navigate('DisplayMovie' as keyof ParamList, { movie });
  };

  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <ImageBackground source={{ uri: movie.displayMovies.image }} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>{movie.name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    padding: 10,
  },
  button: {
    alignItems: "center",
  },
  countContainer: {
    alignItems: "center",
    padding: 1,
  },

  image: {
    width: 200,
    height: 250,
    justifyContent: "flex-end",
    objectFit: "scale-down"
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default MyButton;
