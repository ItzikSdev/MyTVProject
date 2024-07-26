import React from 'react';
import { View,Text, StyleSheet, Button, SafeAreaView, StatusBar, ScrollView,Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { ParamList } from './DisplayMovie';
import { Movie } from '@/types/movie';


interface FullScreenMovieProps {
  movie: Movie;
}


const FullScreenMovie = ({ movie }: FullScreenMovieProps ) => {
  
  const navigation = useNavigation();
  
  const getHtmlContent = `
    <!doctype html>
  <html>
  <head>
      <title>Webtor Player SDK Example</title>
      <meta charset="utf-8">
      <meta content="width=device-width, initial-scale=1" name="viewport">
      <meta content="ie=edge" http-equiv="x-ua-compatible">
      <style>
          html,
          body {
              margin: 0;
              padding: 0;
              overflow: hidden;
              width: 100%;
              height: 100%;
          }
  
          #player {
              height: 80%;
          }
  
          #controls {
              padding: 1rem;
          }
  
          #controls i {
              padding-top: 0.3rem;
              display: block;
          }
  
          .control {
              padding-right: 1rem;
          }
  
          #files {
              padding: 0.5rem;
          }
  
          #files a {
              padding: 0.5rem;
          }
      </style>
      <!-- <script src="../../dist/index.min.js" charset="utf-8" async></script> -->
      <script src="https://cdn.jsdelivr.net/npm/@webtor/embed-sdk-js/dist/index.min.js" charset="utf-8" async></script>
  </head>
  
  <body>
      <div id="controls">
          <span class="control">
              External controls*:
              <button id="play">Play</button>
              <button id="pause">Pause</button>
              <button id="moveto1min">Move to 1 min</button>
              <button id="movetostart">Move to start</button>
          </span>
          <!-- <span class="control">
              Player status: <span id="player-status">NONE</span>
          </span>
          <span class="control">
              Current time: <span id="current-time">0</span> sec
          </span>
          <span class="duration">
              Duration: <span id="duration">0</span> sec
          </span>
          <br />
          <i>* - works only after first click on play button in the player</i> -->
      </div>
      <div id="player"></div>
      <!-- <div id="files"></div> -->
      <script>
          var el = document.getElementById('player');
          window.webtor = window.webtor || [];
          window.webtor.push({
              id: 'player',
              magnet: '${movie.links && movie.links.length > 0 ? movie.links[0].magnet_link : null}',
              title: ' ',
              width: '100%',
              height: '100%',
              features: {
                  autoSubtitles: true,
                  continue: false,
              },
              on: function (e) {
                  if (e.name == window.webtor.TORRENT_FETCHED) {
                      var p = e.player;
                      var files = document.getElementById('files');
                  }
                  if (e.name == window.webtor.TORRENT_ERROR) {
                      console.log('Torrent error!')
                  }
                  if (e.name == window.webtor.INITED) {
                      var p = e.player;
                      document.getElementById('play').addEventListener('click',function (ev) {
                          p.play();
                      });
                      document.getElementById('pause').addEventListener('click',function (ev) {
                          p.pause();
                      });
                      document.getElementById('moveto1min').addEventListener('click',function (ev) {
                          p.setPosition(60);
                      });
                      document.getElementById('movetostart').addEventListener('click',function (ev) {
                          p.setPosition(0);
                      });
                  }
                  if (e.name == window.webtor.PLAYER_STATUS) {
                      document.getElementById('player-status').innerHTML = e.data;
                  }
                  if (e.name == window.webtor.OPEN) {
                      console.log(e.data);
                  }
                  if (e.name == window.webtor.CURRENT_TIME) {
                      document.getElementById('current-time').innerHTML = parseInt(e.data);
                  }
                  if (e.name == window.webtor.DURATION) {
                      document.getElementById('duration').innerHTML = parseInt(e.data);
                  }
                  if (e.name == window.webtor.OPEN_SUBTITLES) {
                      console.log(e.data);
                  }
              },
          });
      </script>
      <script>
          var targetDiv = document.querySelector('div > iframe.iv6bGFFrBm2OTsdCZq8K')?.parentElement;
          console.log(targetDiv);
          setTimeout(document.querySelector('div > iframe.iv6bGFFrBm2OTsdCZq8K')?.parentElement,3000)
      </script>
  </body>
  
  </html>
    `;
    return (
    <SafeAreaView style={styles.container}>
        <ScrollView >
            <WebView
                automaticallyAdjustContentInsets={false}
                style={''}
                source={{html: getHtmlContent}}
                startInLoadingState={false}
                scalesPageToFit={false}
            />
        </ScrollView>
    </SafeAreaView>
  );
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
