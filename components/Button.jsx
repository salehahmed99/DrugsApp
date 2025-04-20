import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { COLORS } from "../constants/colors";
import { hp } from "../helpers/common.js";

export default function Button({
  onPress,
  title,
  buttonStyle,
  textStyle,
  hasShadow,
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        buttonStyle,
        pressed && styles.pressed,
        hasShadow && styles.shadow,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.secondary,
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    color: "white",
    fontSize: hp(2.2),
  },
  pressed: {
    opacity: 0.7,
  },
});
