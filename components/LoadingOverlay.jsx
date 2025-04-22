import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../constants/theme";
import { COLORS } from "../constants/colors";

const LoadingOverlay = ({style}) => {
  return (
    <View style={style}>
      <ActivityIndicator color={COLORS.secondary} size="large" />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({

});
