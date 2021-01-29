import React, { useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CustomBtn from "./components/CustomBtn";

export default function App() {
  //const boxone = useRef(0);
  const boxsix = useRef(0);
  const sixfun = () => {
    boxsix.setNativeProps({ backgroundColor: "blue" });
  };

  /*  const onefun = () => {
    boxone.current.style.backgroundColor = "blue";
  }; */

  /*  const sixfun = () => {
    boxone.current.style.backgroundColor = "blue";
  }; */

  return (
    <View style={styles.container}>
      <View style={styles.puzzlcontainer}>
        <TouchableOpacity>
          <CustomBtn txt="1" myId="one" />
        </TouchableOpacity>

        <TouchableOpacity>
          <CustomBtn txt="2" myId="two" />
        </TouchableOpacity>

        <TouchableOpacity>
          <CustomBtn txt="3" myId="three" />
        </TouchableOpacity>

        <TouchableOpacity>
          <CustomBtn txt="4" myId="four" />
        </TouchableOpacity>

        <TouchableOpacity>
          <CustomBtn txt="5" myId="five" />
        </TouchableOpacity>

        <TouchableOpacity onPress={sixfun}>
          <CustomBtn
            forwardRef={(component) => (boxsix = component)}
            txt="6"
            myId="six"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <CustomBtn txt="7" myId="seven" />
        </TouchableOpacity>

        <TouchableOpacity>
          <CustomBtn txt="8" myId="eight" />
        </TouchableOpacity>

        <View
          id="space"
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
    </View>
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
    //justifyContent: "flex-start",

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
