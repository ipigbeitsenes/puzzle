import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CustomBtn from "./components/CustomBtn";

export default function App() {
  const [positions, setPositions] = useState([1, 2, 3, 4, 5, 6, 7, 8, null]);
  const [activePosition, setActivePosition] = useState();

  const positChanger = () => {
    positions.map((pos, ind) => {
      if (pos === 6 && pos + 3 === null) {
        setPositions(positions([1, 2, 3, 4, 5, null, 7, 8, 6]));
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.tittle}>
        <View style={styles.tittleTop}>
          <TouchableOpacity>
            <Text style={styles.tittleTopTxt}> ﹤ </Text>
          </TouchableOpacity>
          <Text style={styles.tittle3x3}>3 X 3</Text>
          <TouchableOpacity>
            <Text style={styles.tittleTopTxt}> 🔊</Text>
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 30, color: "#00b300" }}> Target Pattern</Text>
      </View>
      <View style={styles.puzzlcontainer}>
        {positions.map((posit, index) => (
          <CustomBtn
            key={index}
            label={posit}
            isActive={activePosition === posit}
            onPress={positChanger}
          />
        ))}
      </View>
      <View>
        <TouchableOpacity>
          <View style={styles.start}>
            <Text style={{ fontSize: 30 }}>Start</Text>
          </View>
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

    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 5,
      width: 5,
    },
  },
  tittle: {
    flex: 0.8,
    margin: 6,
    // backgroundColor: "#99e",

    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  tittleTop: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-around",
    width: 400,
  },
  tittleTopTxt: {
    fontSize: 20,
    backgroundColor: "#932",
    borderRadius: 5,
    width: 35,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  tittle3x3: {
    fontSize: 16,
    fontWeight: "bold",
    borderColor: "#006600",
    borderWidth: 3,
    borderRadius: 5,
    width: 50,
    paddingLeft: 6,
    paddingTop: 5,
    backgroundColor: "#ccc",
  },
  puzzlcontainer: {
    flex: 2.2,
    flexDirection: "row",
    flexWrap: "wrap",
    height: 250,
    width: 318,
    borderColor: "#006600",
    borderWidth: 9,
    borderRadius: 3,
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
    borderRadius: 5,
    marginTop: 40,
    marginBottom: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    flexWrap: "wrap",
    height: 53,
    width: 200,
    backgroundColor: "#235641",
  },
});
