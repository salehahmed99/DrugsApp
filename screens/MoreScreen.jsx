import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";
import { hp, wp } from "../helpers/common";
import Row from "../components/Row";
import Separator from "../components/Separator";

const MoreScreen = () => {
  return (
    <View>
      <Header />
      <Row title='Language'/>  
      <Separator/>
      <Row title='Terms and Conditions'/>  
      <Separator/>
      <Row title='Privacy Policy'/>  
      <Separator/>
    </View>
  );
};

export default MoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
