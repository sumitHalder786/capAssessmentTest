import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../commonStyles";
import Icon from "react-native-vector-icons/FontAwesome";

export default function CustomSearchBar({ value, updateSearch, style }) {
  const [query, setQuery] = useState();
  const [error, setError] = useState("");

  const clearquery = () => {
    setQuery("");
    updateSearch("");
  };

  return (
    <View style={[style]}>
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
              updateSearch(text);
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
}
