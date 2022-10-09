import * as React from "react";
import { View, Button, Dimensions } from "react-native";
import { List, Text } from "react-native-paper";
import { FlatList } from "react-native";
import styles from "../commonStyles";

const ItemList = (props) => {
  const { listData, selectedItemAgentCode, searchSuggestionData, searchQuery } =
    props;

  const flatListRef = React.useRef();

  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;

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
          title={() => {
            return (
              <Text
                style={[styles.textcolor, { textDecorationLine: "underline" }]}
              >
                {item.agentName}
              </Text>
            );
          }}
          description={item.agentCode}
          left={(props) => {
            return (
              <View style={styles.listEleStyle}>
                <Text style={styles.textcolor}>{index + 1}</Text>
                <View style={styles.verticleLine}></View>
              </View>
            );
          }}
          right={(props) => {
            return (
              <View style={styles.listEleStyle}>
                <Text style={{ fontWeight: "bold" }}>{item.prosp}</Text>
              </View>
            );
          }}
        />
      </View>
    );
  };

  return (
    <>
      {searchQuery != "" &&
      searchSuggestionData &&
      searchSuggestionData.length == 0 ? (
        <View
          style={{
            flex: 1,
            marginTop: windowHeight * 0.2,
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "gray", fontWeight: "bold" }}>
              No Result Found for{" "}
            </Text>
            <Text style={{ fontWeight: "bold" }}>'{searchQuery}'</Text>
          </View>
          <View style={{ width: windowWidth * 0.9, marginTop: 8 }}>
            <Button
              onPress={() => {}}
              title="Make a new Search"
              color="#006699"
            />
          </View>
        </View>
      ) : (
        <>
          <View>
            <List.Item
              left={(props) => <Text>FA Rank</Text>}
              right={(props) => <Text>No of Prospect</Text>}
            />
          </View>
          <FlatList
            ref={flatListRef}
            data={listData || []}
            renderItem={renderItem}
            keyExtractor={(item) => item.agentCode}
            style={styles.flatListStyle}
            ListFooterComponent={
              <View style={{ height: 0, marginBottom: 20 }}></View>
            }
            getItemLayout={(data, index) => ({
              length: windowHeight,
              offset: windowHeight * index,
              index,
            })}
          />
        </>
      )}
    </>
  );
};

export default ItemList;