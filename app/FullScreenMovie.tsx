import React from 'react';
import { View,Text, StyleSheet, Button, SafeAreaView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { ParamList } from './DisplayMovie';
import { Movie } from '@/types/movie';

interface FullScreenMovieProps {
  route: RouteProp<ParamList, 'Movie'>;
}

const FullScreenMovie: React.FC<FullScreenMovieProps> = ({ route }) => {  
  const { movie } = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Return" onPress={() => navigation.goBack()} />
        <Text style={{color:"white"}}>{movie.name}</Text>
      <WebView source={{ html: getHtmlContent(movie) }} style={styles.webview} javaScriptEnabled={true} domStorageEnabled={true} />
    </SafeAreaView>
  );
};

const getHtmlContent = (movie: Movie) => {
  return `
    <!doctype html>
    <html>
    <head>
      <title>Webtor Player SDK Example</title>
      <meta charset="utf-8">
      <meta content="width=device-width, initial-scale=1" name="viewport">
      <meta content="ie=edge" http-equiv="x-ua-compatible">
      <style>
        html, body {
          margin: 0;
          padding: 0;
          overflow: hidden;
          width: 100%;
          height: 100%;
        }
        #player {
          height: 100%;
          width: 100%;
        }
      </style>
      <script src="https://cdn.jsdelivr.net/npm/@webtor/embed-sdk-js/dist/index.min.js" charset="utf-8" async></script>
    </head>
    <body>
      <div id="player"></div>
      <script>
        var el = document.getElementById('player');
        window.webtor = window.webtor || [];
        window.webtor.push({
          id: 'player',
          magnet: '${movie.links[0].magnet_link}',
          width: '100%',
          height: '100%',
        });
      </script>
    </body>
    </html>
  `;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  webview: {
    flex: 1,
  },
});

export default FullScreenMovie;
