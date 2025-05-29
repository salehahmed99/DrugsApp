import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";
import { hp, wp } from "../helpers/common";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Ionicons name="search" size={wp(15)} color="white" />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.title}>PharmaSearch</Text>
        <Text style={styles.subtitle}>MedicineDirectory</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    height: hp(15),
    paddingTop: hp(3),
    flexDirection:'row'
  },
  logoContainer: {
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    // borderWidth:2,
  },
  nameContainer: {
    justifyContent: "center",
    // alignItems: "center",
    flex:4,
    // borderWidth:2,
  },
  title: {
    fontSize: hp(4),
    // textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: hp(3),
    // textAlign: "center",
    color: "white",
  },
});
