import { View, Text, StyleSheet } from "react-native";
import { hp, wp } from "../../helpers/common";
import { COLORS } from "../../constants/colors";

export default function DrugDetailRow({ detailName, detailDescription }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{detailName}</Text>
      <Text style={styles.description}>{detailDescription}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
  },
  description: {
    fontSize: hp(1.7),
    flexWrap: "wrap",
    flexShrink: 1,
  },
  name: {
    fontSize: hp(1.7),
    color: COLORS.secondaryText,
  },
});
