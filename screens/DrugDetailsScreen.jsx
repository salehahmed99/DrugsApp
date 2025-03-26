import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { PANADOL, TELFAST } from "../constants/colors";

export default function DrugDetailsScreen({ route }) {
  const drugId = route.params.drugId;
  const drug = drugId === 0 ? PANADOL : TELFAST;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: drug.imageUrl }} style={styles.image} />
      </View>

      <Text style={styles.name}>{drug.name}</Text>

      <Text style={styles.contents}>{drug.contents.replace(/\+/g, " • ")}</Text>

      <View style={styles.detailRow}>
        <Text style={styles.detailName}>Pharmacology : </Text>
        <Text style={styles.detailText}>{drug.pharmacology}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.detailName}>Sub-Category : </Text>
        <Text style={styles.detailText}>{drug.subCategogry}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.detailName}>Producer : </Text>
        <Text style={styles.detailText}>{drug.producer}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.detailName}>Price : </Text>
        <Text style={styles.detailText}>{drug.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  imageContainer: {
    height: 250,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "50%",
  },
  priceTag: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "rgba(255,255,255,0.9)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: 16,
    fontWeight: "700",
    color: "#2a9d8f",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  detailText: {
    fontSize: 14,
  },
  detailName: {
    fontSize: 14,
    color: "#4a4e69",
  },
  contents: {
    color: "#4a4e69",
    marginBottom: 20,
    textAlign: "center",
  },
});
