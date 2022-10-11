import * as React from "react";
import { View, Button, Dimensions } from "react-native";
import { List, Text } from "react-native-paper";
import { FlatList, TouchableOpacity } from "react-native";
import styles from "../commonStyles";
import constants from "../../Constant";

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
      agentCode === selectedItemAgentCode
        ? { backgroundColor: "#006699", color: "white" }
        : {};

    const textDecorationLine =
      agentCode === selectedItemAgentCode ? "none" : "underline";

    return (
      <View key={index}>
        <List.Item
          style={[styles.listItemStyle, selectedItemStyle]}
          title={() => {
            return (
              <Text
                style={[
                  styles.textcolor,
                  selectedItemStyle,
                  { textDecorationLine: textDecorationLine },
                ]}
              >
                {item.agentName}
              </Text>
            );
          }}
          description={() => {
            return (
              <Text
                style={[
                  { color: "gray", fontFamily: "NotoSans_Regular" },
                  selectedItemStyle,
                ]}
              >
                {item.agentCode}
              </Text>
            );
          }}
          left={(props) => {
            return (
              <View style={styles.listEleStyle}>
                <Text style={[styles.textcolor, selectedItemStyle]}>
                  {index + 1}
                </Text>
                <View style={[styles.verticleLine]}></View>
              </View>
            );
          }}
          right={(props) => {
            return (
              <View style={styles.listEleStyle}>
                <Text
                  style={[
                    { fontFamily: "NotoSans_Regular" },
                    selectedItemStyle,
                  ]}
                >
                  {item.prosp}
                </Text>
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
            <Text style={{ color: "gray", fontFamily: "NotoSans_Regular" }}>
              No Result Found for{" "}
            </Text>
            <Text style={{ fontFamily: "NotoSans_Regular" }}>
              '{searchQuery}'
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                flex: 0.35,
                width: windowWidth * 0.9,
                marginTop: 8,
                borderRadius: 8,
                borderWidth: 1,
                justifyContent: "center",
                borderColor: "#006699",
                backgroundColor: "#006699",
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontFamily: "NotoSans_Regular",
                }}
              >
                MAKE NEW SEARCH
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <>
          <View>
            <List.Item
              left={(props) => (
                <Text
                  style={{
                    color: "gray",
                    fontFamily: "NotoSans_Regular",
                  }}
                >
                  {constants.fa_rank}
                </Text>
              )}
              right={(props) => (
                <Text style={{ fontFamily: "NotoSans_Regular", color: "gray" }}>
                  {constants.no_of_prospect}
                </Text>
              )}
            />
          </View>
          <FlatList
            ref={flatListRef}
            data={listData || []}
            renderItem={renderItem}
            keyExtractor={(item) => item.agentCode}
            style={styles.flatListStyle}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
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
