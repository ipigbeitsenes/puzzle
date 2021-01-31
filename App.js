import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import CustomBtn from "./components/CustomBtn";

export default function App() {
  const boxOne = React.useRef(null);
  const boxTwo = React.useRef(null);
  const boxThree = React.useRef(null);
  const boxFour = React.useRef(null);
  const boxFive = React.useRef(null);
  const boxSix = React.useRef(null);
  const boxSeven = React.useRef(null);
  const boxEight = React.useRef(null);
  const boxSpace = React.useRef(null);

  const boxOnefun = () => {
    boxOne.current.setNativeProps({ style: { backgroundColor: "#8A0" } });
  };

  const boxTwofun = () => {
    boxTwo.current.setNativeProps({ style: { backgroundColor: "#8A0" } });
  };

  const boxThreefun = () => {
    boxThree.current.setNativeProps({ style: { backgroundColor: "#8A0" } });
  };

  const boxFourfun = () => {
    boxFour.current.setNativeProps({ style: { backgroundColor: "#8A0" } });
  };

  const boxFivefun = () => {
    boxFive.current.setNativeProps({ style: { backgroundColor: "#8A0" } });
  };

  const boxSixfun = () => {
    boxSix.current.setNativeProps({ style: { backgroundColor: "#8A0" } });
  };
  const boxSevenfun = () => {
    boxSeven.current.setNativeProps({ style: { backgroundColor: "#8A0" } });
  };
  const boxEightfun = () => {
    boxEight.current.setNativeProps({ style: { backgroundColor: "#8A0" } });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.puzzlcontainer}>
        <CustomBtn ref={boxOne} myfun={boxOnefun} label="1" myId="one" />

        <CustomBtn ref={boxTwo} myfun={boxTwofun} label="2" myId="two" />

        <CustomBtn ref={boxThree} myfun={boxThreefun} label="3" myId="three" />

        <CustomBtn ref={boxFour} myfun={boxFourfun} label="4" myId="four" />

        <CustomBtn ref={boxFive} myfun={boxFivefun} label="5" myId="five" />

        <CustomBtn ref={boxSix} myfun={boxSixfun} label="6" myId="six" />

        <CustomBtn ref={boxSeven} myfun={boxSevenfun} label="7" myId="seven" />

        <CustomBtn ref={boxEight} myfun={boxEightfun} label="8" myId="eight" />

        <View
          ref={boxSpace}
          style={{ height: 98, width: 100, backgroundColor: "#333333" }}
        >
          <Text style={styles.txtfont}></Text>
        </View>
      </View>

      <View style={styles.start}>
        <TouchableOpacity>
          <Text>Randomis</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Start</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: "#800060",
    alignItems: "center",
    justifyContent: "center",
  },
  puzzlcontainer: {
    marginTop: 40,
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    height: 300,
    width: 320,
    borderColor: "#006600",
    borderWidth: 9,
  },
  num: {
    height: 80,
    width: 80,
    borderColor: "#333333",
    borderWidth: 1,
    backgroundColor: "#8e2525",
    alignItems: "center",
    justifyContent: "center",
  },
  start: {
    paddingTop: 10,
    borderRadius: 5,
    marginTop: 40,
    marginBottom: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    flexWrap: "wrap",
    height: 53,
    width: 300,
    backgroundColor: "#235641",
  },
});
