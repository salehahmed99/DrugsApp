import { View, Text, Pressable, StyleSheet } from "react-native";
import {MaterialIcons}from "@expo/vector-icons";
import { COLORS } from "../constants/colors";
export default function IconButton({ onPress, style, icon , size}) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, style, pressed && styles.pressed]}
      onPress={onPress}
    >
      <MaterialIcons name={icon} size={size} color="white" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    backgroundColor: COLORS.secondary,
    padding: 15,
  },
  pressed: {
    opacity: 0.7,
  },
});
