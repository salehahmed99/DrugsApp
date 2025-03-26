import { View, Text, StyleSheet, Alert, Pressable } from "react-native";
import { COLORS } from "../constants/colors";
import IconButton from "./IconButton";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { DrugsContext } from "../store/drugs-context";

export default function Drug({ id, name }) {
  const navigation = useNavigation();

  const drugsContext = useContext(DrugsContext);
  const editHandler = () => {
    navigation.navigate("ManageDrugScreen", {
      drugId: id,
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
          onPress: () => drugsContext.deleteDrug(id),
        },
      ]
    );
  };

  const drugPressedHandler = () => {
    navigation.navigate("DrugDetailsScreen", {
      drugId: id,
    });
  };

  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={drugPressedHandler}
    >
      <Text style={styles.text}>{name}</Text>
      <View style={styles.buttonContainer}>
        <IconButton
          style={styles.edit}
          icon="edit"
          size={20}
          onPress={editHandler}
        />
        <IconButton
          style={styles.delete}
          icon="delete"
          size={20}
          onPress={deleteHandler}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 16,
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
    backgroundColor: "white",
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
    // borderWidth:2,
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
    // borderWidth:2,
  },
  pressed: {
    opacity: 0.7,
  },
});
