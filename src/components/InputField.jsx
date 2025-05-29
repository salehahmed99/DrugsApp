import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { COLORS } from "../constants/colors";
import { useState } from "react";
import { hp, wp } from "../helpers/common";

export default function InputField({
  value,
  onChangeText,
  label,
  placeholder,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
        style={styles.textInput}
        placeholderTextColor={COLORS.secondaryText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: hp(1),
  },
  textInput: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    paddingHorizontal: wp(3.5),
    paddingVertical: hp(1.5),
    borderRadius: 10,
    fontSize: hp(1.7),
  },
  label: {
    color: COLORS.primary,
    fontWeight: "bold",
    fontSize: hp(2.2),
  },
});
