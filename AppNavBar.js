import { Appbar } from "react-native-paper";

const AppNavBar = (props) => {
  const { windowWidth } = props;
  return (
    <Appbar.Header
      style={[
        {
          backgroundColor: "transparent",
          color: "#000000",
          width: windowWidth,
        },
      ]}
    >
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content
        title="FA Ranking"
        style={{
          marginLeft: windowWidth * 0.2,
          color: "#000000",
        }}
      />
    </Appbar.Header>
  );
};

export default AppNavBar;
