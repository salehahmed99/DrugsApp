import { View, Text, TextInput, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import React from "react";
import { hp, wp } from "../helpers/common";

export default function SearchBox({ value, onChangeText }) {
  return (
    <TextInput
      style={styles.searchBox}
      placeholder="Search..."
      value={value}
      onChangeText={onChangeText}
    />
  );
}
const styles = StyleSheet.create({
  searchBox: {
    borderWidth: 1,
    borderColor: COLORS.secondaryText,
    paddingHorizontal: wp(3.5),
    paddingVertical: hp(1.5),
    borderRadius: 12,
    fontSize:hp(2),
  },
});
