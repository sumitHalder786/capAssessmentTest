import * as React from "react";
import { Dropdown } from "react-native-element-dropdown";
import ItemList from "../ItemList/index";
import styles from "../commonStyles";
import { View, Text } from "react-native";

const FirstTabView = (props) => {
  const { listData, selectedItemAgentCode, searchSuggestionData, searchQuery } =
    props;

  const [value, setValue] = React.useState(null);
  const [isFocus, setIsFocus] = React.useState(false);

  const renderLabel = () => {
    return (
      <Text style={[styles.label, isFocus && { color: "gray" }]}>
        Select a Category
      </Text>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 20 }}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "gray" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={[]}
          maxHeight={300}
          placeholder={"No. of Prospect"}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <View style={{ flex: 1, marginTop: 10 }}>
        <ItemList
          listData={listData}
          selectedItemAgentCode={selectedItemAgentCode}
          searchSuggestionData={searchSuggestionData}
          searchQuery={searchQuery}
        />
      </View>
    </View>
  );
};

export default FirstTabView;
