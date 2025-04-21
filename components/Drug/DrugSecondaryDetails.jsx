import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { hp } from "../../helpers/common";
import DrugDetailRow from "./DrugDetailRow";

const DrugSecondaryDetails = ({
  clicked,
  pharmacology,
  subCategory,
  company,
}) => {
  return (
    clicked && (
      <View style={styles.container}>
        <DrugDetailRow
          detailName="Pharmacology : "
          detailDescription={pharmacology}
        />
        <DrugDetailRow
          detailName="Sub-Category : "
          detailDescription={subCategory}
        />
        <DrugDetailRow detailName="Company : " detailDescription={company} />
      </View>
    )
  );
};

export default DrugSecondaryDetails;

const styles = StyleSheet.create({
  container: {
    gap: hp(0.8),
  },
});
