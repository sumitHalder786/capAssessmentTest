import * as React from "react";
import { View } from "react-native";
import { Dimensions, SafeAreaView, Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { SearchJsonData } from "../../SearchJsonList";
import AppNavBar from "../../AppNavBar";
import TabBarView from "../TabView/index";
import SearchWithSuggestion from "./SearchWithSuggestion";
import styles from "../commonStyles";

const Search = () => {
  const windowWidth = Dimensions.get("window").width;

  const [showSuggestion, setShowSuggestion] = React.useState(true);
  const [selectedItemAgentCode, setSelectedItem] = React.useState("");

  const [searchQuery, setSearchQuery] = React.useState("");
  const [listData, setListData] = React.useState([]);
  const [searchSuggestionData, setSearchSuggestionData] = React.useState([]);

  const getStoreListData = useSelector(
    (state) => state.listReducerData.listData
  );

  const dispatch = useDispatch();

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    setShowSuggestion(true);
    setSelectedItem("");

    const regexp = new RegExp(query, "i");
    if (query) {
      // if serach result is exsist, get the list and show in search suggestion list
      const newData = listData.filter(
        (x) => regexp.test(x.agentName) || regexp.test(x.agentCode)
      );
      setSearchSuggestionData(newData);
    } else {
      // if no data , clear searched suggestion list and set the all search List data
      setSearchSuggestionData([]);
      setListData(getStoreListData);
    }
  };

  // renderAllSearchResultData this func is used to show the suggestion result in the list
  const renderAllSearchResultData = (searchResultList) => {
    setListData(searchResultList);
    setShowSuggestion(false);
    Keyboard.dismiss();
  };

  const onItemSelect = (item) => {
    const { agentCode = "" } = item || {};
    setSelectedItem(agentCode);
    setShowSuggestion(false);
    Keyboard.dismiss();
  };

  // Make Api call or get the List of Data
  React.useEffect(() => {
    (async () => {
      const {
        agency: {
          prospect: { rankingObject = [] },
        },
      } = SearchJsonData;

      setListData(rankingObject);

      // Store in redux
      dispatch({ type: "Update_list_data", payload: rankingObject });
    })();
  }, []);

  return (
    <SafeAreaView onStartShouldSetResponder={() => setShowSuggestion(false)}>
      <AppNavBar windowWidth={windowWidth} />
      <View style={[styles.viewContainer, { marginHorizontal: 12 }]}>
        <SearchWithSuggestion
          onChangeSearch={onChangeSearch}
          onItemSelect={onItemSelect}
          renderAllSearchResultData={renderAllSearchResultData}
          searchQuery={searchQuery}
          searchSuggestionData={searchSuggestionData}
          showSuggestion={showSuggestion}
        />
        <TabBarView
          selectedItemAgentCode={selectedItemAgentCode}
          searchSuggestionData={searchSuggestionData}
          searchQuery={searchQuery}
          listData={listData}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;
