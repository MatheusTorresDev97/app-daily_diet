import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { ActivityIndicator,  StyleSheet,  View } from "react-native";
import { ThemeProvider } from "styled-components/native";

import { Home } from "@screens/Home";
import theme from "@theme";


export default function App() {
  const [fontsLoaded] = useFonts([NunitoSans_400Regular, NunitoSans_700Bold]);

  return (
    <ThemeProvider theme={theme}>
    <View style={styles.container}>
      {fontsLoaded ? (
        <Home />
      ) : (
        <ActivityIndicator color="#000" size="large" />
      )}
      <StatusBar style="auto" />
    </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
})