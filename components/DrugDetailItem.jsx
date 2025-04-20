import { View, Text, StyleSheet } from "react-native";
import { hp, wp } from "../helpers/common";
import { COLORS } from "../constants/colors";

export default function DrugDetailItem({ detailName, detailText }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{detailName}</Text>
      <Text style={styles.details}>{detailText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(3),
    width: "100%",
  },
  details: {
    fontSize: hp(1.7),
    flexWrap: "wrap",
    flexShrink: 1,
  },
  name: {
    fontSize: hp(1.7),
    color: COLORS.secondaryText,
  },
});
