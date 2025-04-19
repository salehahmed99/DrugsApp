import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import DrugDetailItem from "../components/DrugDetailItem";
import { DrugsContext } from "../store/drugs-context";
import { COLORS } from "../constants/colors";
import IconButton from "../components/IconButton";
import Button from "../components/Button";

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
      <View style={styles.imageContainer}>
        <Image source={{ uri: drug.imageUrl }} style={styles.image} />
      </View>

      <View>
        <Text style={styles.name}>{drug.name}</Text>
        <Text style={styles.contents}>
          {drug.contents.replace(/\+/g, " • ")}
        </Text>
      </View>

      <View style={styles.detailsContainer}>
        <DrugDetailItem
          detailName="Sub-Category : "
          detailText={drug.subCategory}
        />
        <DrugDetailItem
          detailName="Pharmacology : "
          detailText={drug.pharmacology}
        />
        <DrugDetailItem detailName="Producer : " detailText={drug.producer} />
        <DrugDetailItem detailName="Price : " detailText={drug.price} />
      </View>
      <View style={styles.buttonContainer}>
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
  detailsContainer: {
    marginBottom: 10,
    width:'100%',
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
  edit: {
    padding: 10,
    backgroundColor: COLORS.accent,
    marginHorizontal: 10,
  },
  delete: {
    padding: 10,
    backgroundColor: COLORS.statusError,
  },
  buttonContainer: {
    flexDirection: "row",
    alignSelf: "center",
    gap: 20,
    // justifyContent: "space-between",
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
});
