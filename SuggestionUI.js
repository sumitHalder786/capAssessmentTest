import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";

const SuggestionUI = (props) => {
  const {
    listData,
    searchQuery,
    renderAllSearchResultData = () => {},
    onItemSelect = () => {},
  } = props;
  const PopularSearchTile = ({ item }) => {
    return (
      <View>
        <View style={styles.tileContainer}>
          <TouchableOpacity
            style={styles.popularSearchTileContainer}
            onPress={() => onItemSelect(item)}
          >
            <Text
              ellipsizeMode={"tail"}
              numberOfLines={1}
              style={styles.popularSearchTileTitle}
            >
              {item.agentCode} - {item.agentName}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      <View style={[styles.SearchSuggestionsContainer]}>
        <FlatList
          keyboardShouldPersistTaps={"handled"}
          data={listData}
          renderItem={({ item }) => <PopularSearchTile item={item} />}
          ListFooterComponent={() => (
            <>
              <View style={styles.HorizonLine}></View>
              <TouchableOpacity
                onPress={() => renderAllSearchResultData(listData)}
              >
                <Text style={styles.searchResultFooter}>
                  See all result for "{searchQuery}"
                </Text>
              </TouchableOpacity>
            </>
          )}
        />
      </View>
    </View>
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
    marginBottom: -200,
    zIndex: 1,
    borderRadius: 4,
    backgroundColor: "#FCFCFC",
  },
  arrowIconContainer: {
    marginBottom: 12,
    marginRight: 20,
    marginTop: 12,
    textAlign: "right",
  },
  popularSearchTileContainer: {
    flex: 1,
    flexDirection: "row",
  },
  popularSearchTileTitle: {
    color: "gray",
    marginBottom: 12,
    marginTop: 12,
    paddingLeft: 30,
    textAlignVertical: "center",
  },
  searchResultFooter: {
    color: "gray",
    marginTop: 15,
    paddingLeft: 30,
    textAlignVertical: "center",
    fontWeight: "bold",
  },
  tileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  HorizonLine: {
    height: 0.5,
    width: "100%",
    backgroundColor: "#909090",
  },
});

export default SuggestionUI;
