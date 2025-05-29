import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { hp, wp } from "../helpers/common";
import { theme } from "../constants/theme";
import Footer from "../components/Footer";
const WelcomeScreen = ({ children, bg, navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.titleAndDescriptionContainer}>
        <Text style={styles.title}>PharmaSearch</Text>
        <Text style={styles.description}>
        Your Health, Our Priority — Anytime, Anywhere.
        </Text>
      </View>

      <Footer
        buttonText="Getting Started"
        buttonPress={() => navigation.navigate("Signup")}
        footerText="Already have an account!"
        actionText="Login"
        actionPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: wp(4),
    gap: hp(15),
    marginBottom: hp(7),
    position: "relative",
  },
  image: {
    width: wp(100),
    height: hp(30),
    position: "absolute",
    top: hp(32),
    // borderWidth: 1,
  },
  titleAndDescriptionContainer: {
    gap: hp(1.7),
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(4),
    textAlign: "center",
    fontWeight: theme.fonts.extraBold,
  },
  description: {
    textAlign: "center",
    paddingHorizontal: wp(10),
    color: theme.colors.text,
    fontSize: hp(1.9),
  },
});
