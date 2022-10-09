import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { FlatList, TouchableOpacity } from "react-native";
import styles from "../commonStyles";

const SuggestionUI = (props) => {
  const {
    listData,
    searchQuery,
    renderAllSearchResultData = () => {},
    onItemSelect = () => {},
  } = props;
  const PopularSearchTile = ({ item }) => {
    return (
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

export default SuggestionUI;
