import { View, Text, StyleSheet } from "react-native";

export default function DrugDetailItem({ detailName, detailText }) {
  return (
    <View style={styles.detailRow}>
      <Text style={styles.detailName}>{detailName}</Text>
      <Text style={styles.detailText}>{detailText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    paddingHorizontal: 10,
    width: "100%",
  },
  detailText: {
    fontSize: 14,
    flexWrap: "wrap",
    flexShrink: 1,
  },
  detailName: {
    fontSize: 14,
    color: "#4a4e69",
  },
});
