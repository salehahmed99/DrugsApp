import React, { useContext } from "react";
import { View, StyleSheet, Alert, Text } from "react-native";
import { DrugsContext } from "../store/drugs-context";
import { hp, wp } from "../helpers/common";
import Separator from "../components/Separator";
import DrugDetailItem from "../components/Drug/DrugDetailItem";
import Button from "../components/Buttons/Button";
import { COLORS } from "../constants/colors";

export default function DrugDetailsScreen({ route, navigation }) {
  const drugsContext = useContext(DrugsContext);
  const drugId = route.params.drugId;
  const drug = drugsContext.drugs.find((drug) => drug.id === drugId);

  const editHandler = () => {
    navigation.navigate("ManageDrugScreen", {
      drugId: drugId,
    });
  };

  const deleteHandler = () => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this item?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            drugsContext.deleteDrug(drugId);
            navigation.goBack();
          },
        },
      ]
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{drug.name}</Text>
      </View>
      <View style={styles.drugDataContainer}>
        <DrugDetailItem label="Generic Name" description={drug.contents} />
        <Separator />
        <DrugDetailItem label="Price" description={drug.price} />
        <Separator />
        <DrugDetailItem
          label="Main Info"
          description={{
            pharmacology: drug.pharmacology,
            subCategory: drug.subCategory,
            company: drug.company,
          }}
        />
        <Separator />
        <DrugDetailItem label="Details" description={drug.indications} />
      </View>

      {/* <View style={styles.buttonContainer}>
        <Button
          onPress={editHandler}
          title="Edit"
          buttonStyle={[styles.button, { backgroundColor: COLORS.accent }]}
          hasShadow={true}
        />
        <Button
          onPress={deleteHandler}
          title="Delete"
          buttonStyle={[styles.button, { backgroundColor: COLORS.statusError }]}
          hasShadow={true}
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(5),
    gap: hp(3),
  },
  name: {
    fontWeight: "bold",
    fontSize: hp(2.5),
    textAlign: "center",
  },
  nameContainer: {
    // borderWidth:2,
    height:hp(6),
    justifyContent:'center'
  },

  drugDataContainer: {
    gap: hp(2),

  },

  buttonContainer: {
    flexDirection: "row",
    alignSelf: "center",
    gap: wp(10),
    borderWidth:2,
    flex:1,
    // justifyContent: "space-between",
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
});
