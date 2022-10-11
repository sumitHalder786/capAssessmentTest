import { Appbar } from "react-native-paper";
import styles from "./Component/commonStyles";

const AppNavBar = (props) => {
  const { windowWidth } = props;
  return (
    <Appbar.Header style={[styles.AppNavbarStyle, { width: windowWidth }]}>
      <Appbar.BackAction color="#006699" onPress={() => {}} />
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
