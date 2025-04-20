import { View, Text, StyleSheet, Alert, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { DrugsContext } from "../store/drugs-context";
import Button from "./Button";
import { hp, wp } from "../helpers/common";
import { COLORS } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons"

export default function Drug({ id, hideAlternatives = false }) {
  const navigation = useNavigation();

  const drugsContext = useContext(DrugsContext);
  const drug = drugsContext.drugs.find((drug) => drug.id === id);
  if (!drug) return;

  const [clicked, setClicked] = useState(false);

  const onDetailsPress = () => {
    navigation.navigate("DrugDetailsScreen", {
      drugId: id,
    });
  };

  const onAlternativesPress = () => {
    navigation.navigate("AlternativesScreen", {
      drugId: id,
    });
  };

  const onDrugPress = () => {
    setClicked((p) => !p)
  }

  return (
    <View style={styles.container}>
      <View style={styles.horizontalContainer}>
        <Image
          source={{ uri: drug.imageUrl }}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.textName}>{drug.name}</Text>
          <Text style={styles.textContents}>{drug.contents}</Text>
        </View>
        <Pressable onPress={onDrugPress} style={({ pressed }) => [styles.chevronContainer, pressed && styles.pressed]}>
          <Ionicons name={clicked ? "chevron-up" : "chevron-down"} size={18} color={clicked ? COLORS.secondary : COLORS.secondaryText} />
        </Pressable>
      </View>
      {clicked && <View style={styles.buttonsContainer}>
        <Button
          title="Details"
          onPress={onDetailsPress}
          buttonStyle={styles.button}
          textStyle={{ fontSize: hp(1.8) }}
        />
        {!hideAlternatives && (
          <Button
            title="Alternatives"
            buttonStyle={styles.button}
            textStyle={{ fontSize: hp(1.8) }}
            onPress={onAlternativesPress}
          />
        )}
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    // borderWidth: 1,
    gap: wp(3),
  },
  image: {
    height: hp(10),
    width: wp(20),
    // borderWidth: 1,
  },
  detailsContainer: {
    justifyContent: "center",
    flex: 1,
    // borderWidth: 1,
    gap: hp(1),
    paddingHorizontal: wp(2),
  },
  chevronContainer: {
    justifyContent: 'center',
    padding: wp(4),
    // borderWidth:1
  },
  textName: {
    fontSize: hp(1.8),
    color: "black",
    fontWeight: "bold"
  },
  textContents: {
    fontSize: hp(1.6),
    color: COLORS.secondaryText,
    flexWrap: "wrap",
    flexShrink: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: wp(3),
  },
  button: {
    paddingVertical: hp(1),
    paddingHorizontal: hp(1),
    borderRadius: 7,
  },
  pressed: {
    opacity: 0.7,
  },
});
