import * as React from "react";
import { View, Button, Dimensions } from "react-native";
import { List, Text } from "react-native-paper";
import { FlatList, StyleSheet } from "react-native";

const SearchResult = (props) => {
  const { listData, selectedItemAgentCode } = props;
  const flatListRef = React.useRef();
  const [ref, setRef] = React.useState(null);

  const windowHeight = Dimensions.get("window").height;

  // Scroll to the element/Item selected
  React.useEffect(() => {
    if (selectedItemAgentCode) {
      const filteredData = listData
        .map((item, index) => {
          item.index = index;
          return item;
        })
        .filter((item) => item.agentCode === selectedItemAgentCode);

      flatListRef.current.scrollToIndex({
        index: filteredData[0].index,
        animated: true,
      });
    }
  }, [selectedItemAgentCode]);

  const renderItem = ({ item, index }) => {
    const { agentCode } = item || {};

    const selectedItemStyle =
      agentCode === selectedItemAgentCode ? { backgroundColor: "green" } : {};

    return (
      <View key={index}>
        <List.Item
          style={[styles.listItemStyle, selectedItemStyle]}
          title={item.agentName}
          description={item.agentCode}
          left={(props) => {
            return (
              <View style={styles.listEleStyle}>
                <Text>{index + 1}</Text>
                <View style={styles.verticleLine}></View>
              </View>
            );
          }}
          right={(props) => {
            return (
              <View style={styles.listEleStyle}>
                <Text>{item.prosp}</Text>
              </View>
            );
          }}
        />
      </View>
    );
  };

  return (
    <>
      <View>
        <List.Item
          left={(props) => <Text>FA Rank</Text>}
          right={(props) => <Text>No of Prospect</Text>}
        />
      </View>
      <View>
        <FlatList
          ref={flatListRef}
          data={listData || []}
          renderItem={renderItem}
          keyExtractor={(item) => item.agentCode}
          style={styles.flatListStyle}
          ListFooterComponent={
            <View style={{ height: 0, marginBottom: 100 }}></View>
          }
          getItemLayout={(data, index) => ({
            length: windowHeight,
            offset: windowHeight * index,
            index,
          })}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  verticleLine: {
    height: 50,
    width: 0.5,
    marginLeft: 20,
    backgroundColor: "#909090",
  },
  listItemStyle: {
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
  },
  listEleStyle: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  viewContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: 50,
  },
  modal: {
    height: "50%",
    width: "90%",
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignSelf: "center",
  },
  SearchSuggestionsContainer: {
    marginTop: 10,
    paddingBottom: 20,
    borderColor: "gray",

    borderWidth: 1,
    marginBottom: -220,
    zIndex: 1,
    backgroundColor: "white",
  },
  arrowIconContainer: {
    marginBottom: 12,
    marginRight: 20,
    marginTop: 12,
    textAlign: "right",
  },
  popularSearchTileContainer: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    height: 40,
    margin: 5,
  },
  popularSearchTileTitle: {
    color: "gray",
    marginBottom: 12,
    marginTop: 12,
    paddingLeft: 30,
    textAlignVertical: "center",
  },
  tileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flatListStyle: {
    height: "95%",
  },
});

export default SearchResult;
