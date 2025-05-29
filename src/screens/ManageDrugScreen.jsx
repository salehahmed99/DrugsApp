import { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { COLORS } from "../constants/colors";
import Button from "../components/Buttons/Button";
import { DrugsContext } from "../store/drugs-context";
import InputField from "../components/InputField";
import { Drug } from "../models/Drug";
import { hp, wp } from "../helpers/common";
import { Ionicons } from "@expo/vector-icons";
import { storeDrug } from "../helpers/http";

export default function ManageDrugScreen({ navigation, route }) {
  const drugId = route.params?.drugId;
  const addingNewDrug = drugId === undefined;

  const drugsContext = useContext(DrugsContext);

  const existingDrug = drugsContext.drugs.find((drug) => drug.id === drugId);

  const [drugName, setDrugName] = useState(() =>
    existingDrug ? existingDrug.name : ""
  );
  const [drugPrice, setDrugPrice] = useState(() =>
    existingDrug ? existingDrug.price : ""
  );
  const [drugContents, setDrugContents] = useState(() =>
    existingDrug ? existingDrug.contents : ""
  );
  const [drugPharmacology, setDrugPharmacology] = useState(() =>
    existingDrug ? existingDrug.pharmacology : ""
  );
  const [drugSubCategory, setDrugSubCategory] = useState(() =>
    existingDrug ? existingDrug.subCategory : ""
  );
  const [drugProducer, setDrugProducer] = useState(() =>
    existingDrug ? existingDrug.producer : ""
  );
  const [drugImageUrl, setDrugImageUrl] = useState(() =>
    existingDrug ? existingDrug.imageUrl : ""
  );
  const [status, requestPermission] = useCameraPermissions();

  const verifyCameraPermission = async () => {
    if (status.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    return status.granted;
  };
  const pickImage = async () => {
    const hasPermission = await verifyCameraPermission();
    if (!hasPermission) {
      Alert.alert(
        "Insufficient Permissions!",
        "Please enable camera permissions"
      );
      return;
    }
    const imagePickerResult = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
    });
    if (!imagePickerResult.canceled) {
      setDrugImageUrl(imagePickerResult.assets[0].uri);
      onImageCapture(imagePickerResult.assets[0].uri);
    } else {
      console.log("canceled");
    }
  };

  const saveDrugHandler = async () => {
    if (
      drugName.trim().length === 0 ||
      drugContents.trim().length == 0 ||
      drugPrice.length == 0 ||
      drugPharmacology.length == 0 ||
      drugSubCategory.length == 0 ||
      drugProducer.length == 0 ||
      drugImageUrl.length == 0
    ) {
      Alert.alert("Missing Details", "Please enter all drug details!");
      return;
    }

    // if (drugsContext.drugs.find((item) => item.name === drugName.trim())) {
    //   Alert.alert("Drug already exists", "Please enter a new name!");
    //   return;
    // }
    if (addingNewDrug) {
      const newDrug = new Drug(
        drugsContext.drugs.length,
        drugName.trim(),
        drugContents.trim(),
        drugPrice.trim(),
        drugPharmacology.trim(),
        drugSubCategory.trim(),
        drugProducer.trim(),
        drugImageUrl.trim()
      );
      const drugId = await storeDrug(newDrug);
      drugsContext.addDrug({ ...newDrug, id: drugId });
    } else {
      const drugDetails = {
        name: drugName.trim(),
        price: drugPrice,
        contents: drugContents,
        pharmacology: drugPharmacology,
        subCategory: drugSubCategory,
        producer: drugProducer,
        imageUrl: drugImageUrl,
      };
      drugsContext.editDrug(drugId, drugDetails);
    }
    navigation.goBack();
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.container}>
        {Platform.OS === "android" && (
          <Pressable
            onPress={() => navigation.goBack()}
            style={({ pressed }) => [
              styles.arrowLeftContainer,
              pressed && styles.pressed,
            ]}
          >
            <Ionicons name="chevron-back" size={24} />
          </Pressable>
        )}

        <Text style={styles.title}>
          {addingNewDrug ? "Add New Drug" : "Edit Drug Details"}
        </Text>

        <View style={styles.formContainer}>
          <InputField
            label="Name"
            placeholder="Enter Drug Name..."
            value={drugName}
            onChangeText={setDrugName}
          />
          <InputField
            label="Price"
            placeholder="Enter Drug Price..."
            value={drugPrice}
            onChangeText={setDrugPrice}
            keyboardType="numeric"
          />
          <InputField
            label="Contents"
            placeholder="Enter Drug Contents..."
            value={drugContents}
            onChangeText={setDrugContents}
          />
          <InputField
            label="Pharmacology"
            placeholder="Enter Drug Pharmacology..."
            value={drugPharmacology}
            onChangeText={setDrugPharmacology}
          />
          <InputField
            label="Sub Category"
            placeholder="Enter Drug Sub Category..."
            value={drugSubCategory}
            onChangeText={setDrugSubCategory}
          />
          <InputField
            label="Producer"
            placeholder="Enter Drug Producer..."
            value={drugProducer}
            onChangeText={setDrugProducer}
          />
          <View style={styles.imagePickerContainer}>
            <Text style={styles.label}>Image</Text>

            <Pressable
              onPress={pickImage}
              style={({ pressed }) => [
                styles.imagePreview,
                pressed && styles.pressed,
              ]}
            >
              {drugImageUrl ? (
                <Image style={styles.image} source={{ uri: drugImageUrl }} />
              ) : (
                <Text style={styles.text}>Click to capture an image</Text>
              )}
            </Pressable>
          </View>
        </View>

        <View style={{ marginBottom: 40 }}>
          <Button
            onPress={saveDrugHandler}
            title="Save"
            hasShadow={true}
            buttonStyle={styles.button}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: Platform.OS === "android" ? hp(4) : 0,
  },

  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: COLORS.secondary,
    marginBottom: 50,
  },
  arrowLeftContainer: {
    backgroundColor: "#E3E3E3",
    borderRadius: 14,
    alignSelf: "flex-start",
    padding: wp(1.5),
    position: "absolute",
    left: 0,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
  },

  formContainer: {
    gap: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: COLORS.secondary,
    alignSelf: "center",
    paddingVertical: 16,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  imagePickerContainer: {},
  text: {
    color: COLORS.secondaryText,
  },
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  pressed: {
    opacity: 0.7,
  },
  label: {
    color: COLORS.primary,
    fontWeight: "bold",
    fontSize: 18,
  },
});
