import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";
import { hp, wp } from "../helpers/common";

const Row = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.row}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.chevronContainer}>
          <Ionicons name="chevron-forward" size={25} color={COLORS.secondary} />
        </View>
      </View>
    </Pressable>
  );
};

export default Row;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    height: hp(6),
    alignItems: "center",
  },
  textContainer: {
    flex: 10,
    // borderWidth: 1,
    paddingHorizontal: wp(4),
  },
  text: {
    fontSize: hp(2.2),
  },
  chevronContainer: {
    flex: 1,
    // borderWidth: 1,
    alignItems: "flex-end",
  },
});
