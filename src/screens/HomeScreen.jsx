import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { fetchDrugs, fetchExpenses, storeDrug } from "../helpers/http";
import { DrugsContext } from "../store/drugs-context";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";
import { hp, wp } from "../helpers/common";
import HomeSection from "../components/HomeSection";

const HomeScreen = () => {
  const drugsContext = useContext(DrugsContext);
  // useEffect(() => {
  //   const store = async () => {
  //     for (let drug of drugsContext.drugs) {
  //       await storeDrug(drug);
  //     }
  //   };
  //   // store();
  // }, []);

  useEffect(() => {
    const getDrugs = async () => {
      drugsContext.setLoading(true);
      const drugs = await fetchDrugs();
      drugsContext.setFetchedDrugs(drugs);
      drugsContext.setLoading(false);
    };
    getDrugs();
  }, []);
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.dataContainer}>
          <HomeSection label="Recent Products" />
          <HomeSection label="Top Products Last Q" />
          <HomeSection label="Don't Miss This" />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataContainer: {
    paddingHorizontal: wp(5),
    gap: hp(6),
    marginVertical: hp(3 ),
  },
});
