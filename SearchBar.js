import * as React from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet } from "react-native";

const SearchResult = (props) => {
  const { onChangeSearch, searchQuery } = props;

  return (
    <>
      <Searchbar
        style={{ borderColor: "gray", borderWidth: 1 }}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </>
  );
};

export default SearchResult;
