import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Search from "./Component/Search/index";
import * as React from "react";

import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import configureStore from "./Redux/store";
import * as font from "expo-font";

export default function App() {
  const [dataLoaded, setDataLoaded] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      let isLoaded = await font.loadAsync({
        NotoSans_Regular: require("./assets/fonts/NotoSans-Bold.ttf"),
      });
      setTimeout(() => {
        setDataLoaded(true);
      });
    })();
  }, []);

  if (dataLoaded) {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
