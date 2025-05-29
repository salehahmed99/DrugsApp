import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { hp } from "../../helpers/common";
import DrugDetailRow from "./DrugDetailRow";
import { DrugsContext } from "../../store/drugs-context";
import { Skeleton } from "react-native-skeletons";

const DrugSecondaryDetails = ({
  clicked,
  pharmacology,
  subCategory,
  company,
  imageLoading,
}) => {
  const { loading } = useContext(DrugsContext);

  return (
    clicked && (
      <View style={styles.container}>
        {imageLoading || loading ? (
          <Skeleton />
        ) : (
          <DrugDetailRow
            detailName="Pharmacology : "
            detailDescription={pharmacology}
          />
        )}

        {imageLoading || loading ? (
          <Skeleton />
        ) : (
          <DrugDetailRow
            detailName="Sub-Category : "
            detailDescription={subCategory}
          />
        )}
        {imageLoading || loading ? (
          <Skeleton />
        ) : (
          <DrugDetailRow detailName="Company : " detailDescription={company} />
        )}
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
