import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function CustomBtn(props) {
  setNativeProps = (nativeProps) => {
    _root.setNativeProps(nativeProps);
  };

  return (
    <View
      style={styles.num}
      ref={(component) => (_root = component)}
      {...props}
    >
      <Text style={styles.txtfont}>{props.txt}</Text>
    </View>
  );
}

export default CustomBtn;

const styles = StyleSheet.create({
  num: {
    height: 98,
    width: 100,
    borderColor: "#333333",
    borderWidth: 1,
    backgroundColor: "#8e2525",
    alignItems: "center",
    justifyContent: "center",
  },
  txtfont: {
    fontSize: 60,
  },
});
