import { StyleSheet, Text, View, Pressable } from "react-native";
import { wp, hp } from "../helpers/common";
import { theme } from "../constants/theme";
import Button from "./Buttons/Button";
import { COLORS } from "../constants/colors";
const Footer = ({
  buttonText,
  buttonPress,
  footerText,
  actionText,
  actionPress,
  isButtonLoading,
}) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={buttonPress}
        title={buttonText}
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
        isLoading={isButtonLoading}
        hasShadow={true}
      />
      <View style={styles.footerContainer}>
        <Text style={styles.text}>{footerText}</Text>
        <Pressable
          onPress={actionPress}
          style={({ pressed }) => pressed && styles.pressed}
        >
          <Text style={[styles.text, styles.action]}>{actionText}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: wp(1.5),
  },
  text: {
    color: theme.colors.text,
    fontSize: hp(1.8),
  },
  action: {
    color: COLORS.secondary,
    fontWeight: theme.fonts.bold,
  },
  pressed: {
    opacity: 0.5,
  },
  container: {
    width: "100%",
    gap: hp(2),
  },
  button: {
    marginHorizontal: wp(3),
    height: hp(7.5),
    justifyContent: "center",
  },
  buttonText: {
    fontSize: hp(2.5),
    textAlign:'center',
    fontWeight:'bold',
  },
});
