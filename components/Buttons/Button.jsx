import { Text, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../../constants/colors.js";
import { hp } from "../../helpers/common.js";
import { theme } from "../../constants/theme";
import LoadingOverlay from "../LoadingOverlay";

export default function Button({
  title,
  buttonStyle,
  textStyle,
  onPress,
  isLoading,
  hasShadow,
}) {
  if (isLoading) {
    return <LoadingOverlay style={buttonStyle} />;
  }
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
    borderRadius: theme.radius.xl,
  },
  shadow: {
    shadowColor: theme.colors.dark,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation:10,
  },
  text: {
    color: "white",
    fontSize: hp(2.2),
  },
  pressed: {
    opacity: 0.5,
  },
});
