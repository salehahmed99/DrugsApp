import { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { COLORS } from "../constants/colors";
import Button from "../components/Button";
import { DrugsContext } from "../store/drugs-context";
import InputField from "../components/InputField";

export default function ManageDrugScreen({ navigation, route }) {
  const drugId = route.params?.drugId;
  const addingNewDrug = drugId === undefined;

  const drugsContext = useContext(DrugsContext);

  const drug = drugsContext.drugs.find((drug) => drug.id === drugId);

  const [drugName, setDrugName] = useState(drug?.name);

  const saveDrugHandler = () => {
    if (!drugName || drugName.trim().length === 0) {
      Alert.alert("Drug can't be empty", "Please enter drug details!");
      return;
    }

    if (drugsContext.drugs.find((item) => item.name === drugName.trim())) {
      Alert.alert("Drug already exists", "Please enter a new name!");
      return;
    }
    if (addingNewDrug) drugsContext.addDrug(drugsContext.drugs.length, drugName.trim());
    else drugsContext.editDrug(drugId, drugName.trim());
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {addingNewDrug ? "Add New Drug" : "Edit Drug Details"}
      </Text>

      <InputField
        label="Name"
        placeholder="Enter Drug Name..."
        value={drugName}
        onChangeText={setDrugName}
      />
      <Button onPress={saveDrugHandler}>Save</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 50,
    color: COLORS.secondary,
  },
  container: {
    flex: 1,
    padding: 20,
  },

  button: {
    backgroundColor: COLORS.primary,
    alignSelf: "center",
    padding: 16,
    borderRadius: 15,
    marginTop: 10,
  },
});
