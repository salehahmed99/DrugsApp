import { View, Text, TextInput, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import React from "react";

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
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    fontSize:16,
  },
});
