import * as React from "react";
import { View } from "react-native";
import { Dimensions, StyleSheet, SafeAreaView, Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import SuggestionUI from "./SuggestionUI";
import SearchResult from "./SearchResult";
import { SearchJsonData } from "./SearchJsonList";
import SearchBar from "./SearchBar";

const Search = () => {
  const windowWidth = Dimensions.get("window").width;

  const [searchQuery, setSearchQuery] = React.useState("");
  const [listData, setListData] = React.useState([]);
  const [searchSuggestionData, setSearchSuggestionData] = React.useState([]);
  const [showSuggestion, setShowSuggestion] = React.useState(true);
  const [selectedItemAgentCode, setSelectedItem] = React.useState("");

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
      const newData = listData.filter((x) => regexp.test(x.agentName));
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
      <View style={[styles.viewContainer, { width: windowWidth * 0.9 }]}>
        <View>
          <View>
            <SearchBar
              onChangeSearch={onChangeSearch}
              searchQuery={searchQuery}
            />
          </View>
          <View>
            {searchSuggestionData &&
            searchSuggestionData.length &&
            showSuggestion ? (
              <SuggestionUI
                listData={searchSuggestionData}
                searchQuery={searchQuery}
                renderAllSearchResultData={renderAllSearchResultData}
                onItemSelect={onItemSelect}
              />
            ) : null}
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <SearchResult
            listData={listData}
            selectedItemAgentCode={selectedItemAgentCode}
          />
        </View>
      </View>
    </SafeAreaView>
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
    borderRadius: 4,
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
});

export default Search;
