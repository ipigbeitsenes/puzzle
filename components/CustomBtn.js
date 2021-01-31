import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CustomBtn = React.forwardRef((props, ref) => {
  return (
    <TouchableOpacity onPress={props.myfun}>
      <View style={styles.num} ref={ref} className="CustomBtn">
        <Text style={styles.txtfont}>{props.label}</Text>
      </View>
    </TouchableOpacity>
  );
});

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
