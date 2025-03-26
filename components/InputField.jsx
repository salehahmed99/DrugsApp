import { View, Text, TextInput, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import { useState } from "react";

export default function InputField({value , onChangeText, label , placeholder}) {

  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
        style={styles.textInput}
        placeholderTextColor={COLORS.secondaryText}
      />
    </>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
  },
  label: {
    color: COLORS.primary,
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 18,
  },
});
