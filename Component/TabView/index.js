import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import FirstTabView from "./FirstTabView";

const TabBarView = (props) => {
  const {
    windowWidth,
    selectedItemAgentCode,
    searchSuggestionData,
    searchQuery,
    listData,
  } = props;

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: "first", title: "Agency" },
    { key: "second", title: "Region" },
    { key: "third", title: "Country" },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      renderLabel={({ route, focused, color }) => (
        <Text
          style={{
            color: focused ? "#006699" : "gray",
            marginRight: 40,
            fontFamily: "NotoSans_Regular",
          }}
        >
          {route.title}
        </Text>
      )}
      indicatorStyle={{ backgroundColor: "#006699", width: 80 }}
      style={{ backgroundColor: "white" }}
    />
  );

  const FirstRoute = () => (
    <FirstTabView
      listData={listData}
      selectedItemAgentCode={selectedItemAgentCode}
      searchSuggestionData={searchSuggestionData}
      searchQuery={searchQuery}
    />
  );

  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: "transparent" }} />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: SecondRoute,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      initialLayout={{ width: windowWidth }}
      style={{ marginTop: 10 }}
    />
  );
};

export default TabBarView;
