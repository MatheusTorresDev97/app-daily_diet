import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { ActivityIndicator,  View } from "react-native";
import { Home } from "@screens/Home";


export default function App() {
  const [fontsLoaded] = useFonts([NunitoSans_400Regular, NunitoSans_700Bold]);

  return (
    <View>
      {fontsLoaded ? (
        <Home />
      ) : (
        <ActivityIndicator color="#000" size="large" />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

