import { View, Text, StyleSheet, Alert, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { DrugsContext } from "../store/drugs-context";
import Button from "./Button";

export default function Drug({ id, hideAlternatives = false }) {
  const navigation = useNavigation();

  const drugsContext = useContext(DrugsContext);
  const drug = drugsContext.drugs.find((drug) => drug.id === id);
  if (!drug) return;

  const drugPressedHandler = () => {
    navigation.navigate("DrugDetailsScreen", {
      drugId: id,
    });
  };

  const alternativesPressedHandler = () => {
    navigation.navigate("AlternativesScreen", {
      drugId: id,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.horizontalContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: drug.imageUrl }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{drug.name}</Text>
          <Text style={styles.contents}>{drug.contents}</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Details"
          onPress={drugPressedHandler}
          buttonStyle={styles.button}
          textStyle={{ fontSize: 14 }}
        />
        {}
        {!hideAlternatives && (
          <Button
            title="Alternatives"
            buttonStyle={styles.button}
            textStyle={{ fontSize: 14 }}
            onPress={alternativesPressedHandler}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderBottomWidth: 1,
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  imageContainer: {
    marginRight: 10,
  },
  detailsContainer: {
    justifyContent: "center",
    flex: 1,
  },
  name: {
    fontSize: 17,
    color: "black",
    marginBottom: 10,
  },
  contents: {
    fontSize: 13,
    color: "#4a4e69",
    flexWrap: "wrap",
    flexShrink:1,
  },
  pressed: {
    opacity: 0.7,
  },
  image: {
    height: 80,
    width: 70,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
  button: {
    paddingVertical: 7,
    paddingHorizontal: 7,
    borderRadius: 7,
  },
});
