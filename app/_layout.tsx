import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StyleSheet, StatusBar } from "react-native";
import Style from "@/styles/Style";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DisplayMovies from "./DisplayMovies";
import DisplayMovie from "./DisplayMovie";
import FullScreenMovie from "./FullScreenMovie";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="DisplayMovies"
          options={{ headerShown: false }}
          component={DisplayMovies}
        />
        <Stack.Screen
          name="DisplayMovie"
          options={{ headerShown: false }}
          component={DisplayMovie}
        />
        <Stack.Screen
          name="FullScreenMovie"
          options={{ headerShown: false }}
          component={FullScreenMovie}
        />
      </Stack.Navigator>
    </ThemeProvider>
  );
}

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
