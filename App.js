import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Search from "./Component/Search/index";

import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import configureStore from "./Redux/store";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={configureStore()}>
        <PaperProvider>
          <Search />
        </PaperProvider>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
