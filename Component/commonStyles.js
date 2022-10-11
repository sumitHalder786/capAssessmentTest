import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeContainerStyle: {
    flex: 1,
    margin: 20,
    justifyContent: "center",
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
    paddingBottom: 15,
    borderColor: "gray",

    borderWidth: 1,
    marginBottom: -220,
    zIndex: 1,
    backgroundColor: "#F8F8F8",
  },
  arrowIconContainer: {
    marginBottom: 12,
    marginRight: 20,
    marginTop: 12,
    textAlign: "right",
  },
  AppNavbarStyle: {
    backgroundColor: "transparent",
    color: "#000000",
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
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
    margin: 10,
    fontSize: 16,
    textAlignVertical: "center",
  },
  tileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F8F8F8",
  },
  flatListStyle: {
    marginTop: -10,
  },

  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 13,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 10,
    top: -8,
    zIndex: 999,
    paddingHorizontal: 5,
    fontSize: 14,
    color: "gray",
    fontFamily: "NotoSans_Regular",
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  txtError: {
    marginTop: 5,
    width: "100%",
    color: "red",
  },
  vwClear: {
    position: "absolute",
    top: 5,
    right: 0,
    flex: 0.2,
    marginRight: 12,
    justifyContent: "center",
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingLeft: 15,
    fontFamily: "NotoSans_Regular",
  },

  textcolor: {
    color: "#006699",
    fontFamily: "NotoSans_Regular",
    fontSize: 16,
  },

  vwSearch: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  icSearch: {
    height: 18,
    width: 18,
  },
  searchContainer: {
    backgroundColor: "white",
    height: 45,
    flexDirection: "row",
    width: "100%",
  },
  searchResultFooter: {
    color: "gray",
    marginTop: 15,
    paddingLeft: 18,
    textAlignVertical: "center",
    fontFamily: "NotoSans_Regular",
  },

  HorizonLine: {
    height: 0.8,
    width: "100%",
    backgroundColor: "#909090",
  },
});

export default styles;
