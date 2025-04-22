import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import Row from "../components/Row";
import Separator from "../components/Separators/Separator";
import { useAuth } from "../store/auth-context";
import { Alert } from "react-native";

const MoreScreen = () => {
  const { logout, isLoading } = useAuth();

  const onLogoutPress = () => {
    Alert.alert("Logout", "Are you sure you want to log out?", [
      { text: "Yes", onPress: logout, style: "destructive" },
      {
        text: "Cancel",
        style:'cancel'
      },
    ]);
  };
  return (
    <View>
      <Header />
      <Row title="Language" />
      <Separator />
      <Row title="Terms and Conditions" />
      <Separator />
      <Row title="Privacy Policy" />
      <Separator />
      <Row title="Logout" onPress={onLogoutPress} />
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
