import React, { useCallback, useState } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { useScale } from "@/hooks/useScale";
import { Movie } from "@/types/movie";
import { Colors } from "@/constants/Colors";
import Style from "@/styles/Style";
import FullScreenMovie from "@/app/FullScreenMovie";

interface RenderMovieProps {
  movie: Movie;
  hasTVPreferredFocus?: boolean;
  onPress: (movie: Movie) => void;
}
export type ParamList = {
  Movie: { movie: Movie };
};

const RenderMovie: React.FC<RenderMovieProps> = ({
  movie,
  hasTVPreferredFocus,
  onPress,
}) => {
  const styles = galleryItemComponentStyles();
  const [focus, setFocus] = useState(false);

  const onFocus = useCallback(() => setFocus(true), [movie.name]);

  const onBlur = useCallback(() => setFocus(false), []);

  const handlePress = useCallback(() => onPress(movie), [movie, onPress]);

  return (
    <View>
      <Text style={styles.hadderText}>{movie.name}</Text>
      <TouchableHighlight
        onFocus={onFocus}
        onBlur={onBlur}
        onPress={handlePress}
        hasTVPreferredFocus={hasTVPreferredFocus}
        style={[styles.wrapper, focus ? styles.wrapperFocused : null]}
      >
        <View style={styles.view}>
          <View style={{ height: "100%" }}>
            <FullScreenMovie movie={movie} />
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const galleryItemComponentStyles = function () {
  const scale = useScale();
  return StyleSheet.create({
    view: {
      backgroundColor: Colors.dark.background,
    },
    wrapper: {
      backgroundColor: Colors.dark.background,
    },
    wrapperFocused: {
      backgroundColor: Colors.dark.background,
    },
    hadderText: {
      fontSize: 24,
      color: "white",
      padding: 10,
    },
    text: {
      fontSize: 12,
      marginTop: 0,
      color: "white",
      textAlign: "center",
      margin: "auto",
      lineHeight: 20,
    },
  });
};

export default RenderMovie;
