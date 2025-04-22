import { View, Text, StyleSheet, Alert, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { DrugsContext } from "../../store/drugs-context";
import { hp, wp } from "../../helpers/common";
import { COLORS } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import DrugPrimaryDetails from "./DrugPrimaryDetails";
import ButtonsContainer from "../Buttons/ButtonsContainer";
import DrugSecondaryDetails from "./DrugSecondaryDetails";
import { Skeleton } from "react-native-skeletons";

export default function Drug({ id, hideAlternatives = false }) {
  const navigation = useNavigation();

  const drugsContext = useContext(DrugsContext);
  const drug = drugsContext.drugs.find((drug) => drug.id === id);
  if (!drug) return;

  const [clicked, setClicked] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

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
    setClicked((p) => !p);
  };

  return (
    <Pressable onPress={onDrugPress}>
      <View style={styles.container}>
        <View style={styles.horizontalContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: drug.imageUrl }}
              style={[
                styles.image,
                (imageLoading || drugsContext.loading) && styles.hiddenImage,
              ]}
              resizeMode="contain"
              onLoadStart={() => setImageLoading(true)}
              onLoad={() => setImageLoading(false)}
            />
            {(imageLoading || drugsContext.loading) && (
              <Skeleton width="100%" height="100%" style={styles.skeleton} />
            )}
          </View>
          <View style={styles.detailsContainer}>
            <DrugPrimaryDetails
              clicked={clicked}
              name={drug.name}
              contents={drug.contents}
              price={drug.price}
              imageLoading={imageLoading}
            />
            <DrugSecondaryDetails
              clicked={clicked}
              company={drug.company}
              pharmacology={drug.pharmacology}
              subCategory={drug.subCategory}
              imageLoading={imageLoading}
            />
          </View>
          <View style={styles.chevronContainer}>
            <Ionicons
              name={clicked ? "chevron-up" : "chevron-down"}
              size={18}
              color={clicked ? COLORS.secondary : COLORS.secondaryText}
            />
          </View>
        </View>
        {clicked && (
          <ButtonsContainer
            hideAlternatives={hideAlternatives}
            onAlternativesPress={onAlternativesPress}
            onDetailsPress={onDetailsPress}
          />
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
    gap: hp(2),
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    gap: wp(2),
  },
  imageContainer: {
    height: hp(8.5),
    width: wp(20),
    // borderWidth:1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  hiddenImage: {
    opacity: 0,
  },
  skeleton: {
    position: "absolute", // Overlay skeleton on top of hidden image
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    gap: hp(1.5),
    // borderWidth:1,
    justifyContent: "center",
  },
  chevronContainer: {
    justifyContent: "center",
    padding: wp(4),
  },
});
