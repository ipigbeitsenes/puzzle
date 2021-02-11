import React from "react";
import styled from "styled-components/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CustomBtn = React.forwardRef((props, ref) => {
  const Container = styled.View`
    height: 98px;
    width: 100px;
    border-color: #333333;
    border-width: 1px;
    background-color: ${props.label ? "#8e2525" : "#555"};
    align-items: center;
    justify-content: center;
    border-radius: 3px;
  `;

  return (
    <TouchableOpacity onPress={props.myfun}>
      <Container>
        <Text style={styles.txtfont}>{props.label}</Text>
      </Container>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  txtfont: {
    fontSize: 60,
  },
});
export default CustomBtn;
