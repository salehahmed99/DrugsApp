import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { hp } from "../../helpers/common";

const Spacing = () => {
  return <View style={styles.spacing}></View>;
};

export default Spacing;

const styles = StyleSheet.create({
  spacing: {
    height: hp(3),
  },
});
