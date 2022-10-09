import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../commonStyles";

const SearchBar = (props) => {
  const { onChangeSearch } = props;

  const [query, setQuery] = useState();
  const [error, setError] = useState("");

  const clearquery = () => {
    setQuery("");
    onChangeSearch("");
  };

  return (
    <View style={{ marginTop: "8%" }}>
      <View style={styles.searchContainer}>
        <TextInput
          value={query}
          placeholder="Search by Agent Code, User Name"
          style={styles.textInput}
          onChangeText={(text) => {
            setQuery(text);

            var letters = /^[a-zA-Z\d\-._\s]+$/i;

            if (text != "" && !text.match(letters)) {
              setError(
                "*Only alpbhabets, numbers, dash, dot and space are allowed"
              );
            } else {
              onChangeSearch(text);
              setError("");
            }
          }}
        />
        {query ? (
          <TouchableOpacity onPress={() => clearquery()} style={styles.vwClear}>
            <Text style={{ fontSize: 22, color: "#006699" }}>x</Text>
          </TouchableOpacity>
        ) : (
          <Icon
            name="search"
            style={[styles.vwClear, { marginTop: 6 }]}
            size={18}
            color="#006699"
          />
        )}
      </View>
      {error && <Text style={styles.txtError}>{error}</Text>}
    </View>
  );
};

export default SearchBar;
