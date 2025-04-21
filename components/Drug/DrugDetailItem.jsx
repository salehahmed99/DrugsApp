import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DrugSecondaryDetails from "./DrugSecondaryDetails";
import { hp, wp } from "../../helpers/common";
import { COLORS } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const DrugDetailItem = ({ label, description }) => {
  let component;
  let iconName;
  switch (label) {
    case "Generic Name":
      component = <Text style={styles.contents}>{description}</Text>;
      iconName = "pencil";
      break;
    case "Price":
      component = <Text style={styles.price}>{description}</Text>;
      iconName = "pricetag";
      break;
    case "Main Info":
      component = <DrugSecondaryDetails clicked={true} {...description} />;
      iconName = "information";
      break;
    case "Details":
      component = (
        <View style={styles.indicationsContainer}>
          <Text style={styles.price}>Indications</Text>
          <Text>{description}</Text>
        </View>
      );
      iconName="document-text";
  }
  return (
    <View style={styles.drugItemContainer}>
      <View style={styles.iconContainer}>
        <Ionicons name={iconName} size={24} color={COLORS.secondary} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>{label}</Text>
        {component}
      </View>
    </View>
  );
};

export default DrugDetailItem;

const styles = StyleSheet.create({
  contents: {
    fontSize: hp(2),
    flexWrap: "wrap",
    flexShrink: 1,
  },
  drugItemContainer: {
    flexDirection: "row",
    gap: wp(2),
  },
  iconContainer: {
    // borderWidth: 1,
  },
  detailsContainer: {
    // borderWidth: 1,
    flex: 1,
    gap: hp(1.5),
  },
  label: {
    color: COLORS.secondary,
    fontSize: hp(2),
    fontWeight: "500",
  },
  price: {
    // fontWeight: "500",
    fontSize: hp(2),
  },
  indicationsContainer: {
    gap: hp(1.5),
  },
});
