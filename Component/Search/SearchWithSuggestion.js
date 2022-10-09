import SearchBar from "./SearchBar";
import SuggestionUI from "./SuggestionUI";

const SearchWithSuggestion = (props) => {
  const {
    onChangeSearch,
    searchQuery,
    searchSuggestionData,
    showSuggestion,
    renderAllSearchResultData,
    onItemSelect,
  } = props;
  return (
    <>
      <SearchBar onChangeSearch={onChangeSearch} searchQuery={searchQuery} />
      {searchSuggestionData && searchSuggestionData.length && showSuggestion ? (
        <SuggestionUI
          listData={searchSuggestionData}
          searchQuery={searchQuery}
          renderAllSearchResultData={renderAllSearchResultData}
          onItemSelect={onItemSelect}
        />
      ) : null}
    </>
  );
};

export default SearchWithSuggestion;
