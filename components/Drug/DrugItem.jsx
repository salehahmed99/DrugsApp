import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { hp, wp } from "../../helpers/common";
import { useNavigation } from "@react-navigation/native";

const DrugItem = ({ imageUrl, name, price, id }) => {
  const navigation = useNavigation();
  const onDrugPressed = () => {
    navigation.navigate("DrugDetailsScreen", {
      drugId: id,
    });
  };

  return (
    <Pressable
      onPress={onDrugPressed}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
            {name}
          </Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default DrugItem;

const ITEMS_PER_PAGE = 3;
const HORIZONTAL_PADDING = wp(5);
const SCREEN_WIDTH = wp(100);
const ITEM_WIDTH = (SCREEN_WIDTH - 2 * HORIZONTAL_PADDING) / ITEMS_PER_PAGE;

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    height: hp(20),
    // borderWidth: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // borderWidth: 1,
    width: "100%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
    gap: hp(1),
    // borderWidth: 1,
  },
  name: {
    flexWrap: "wrap",
    flexShrink: 1,
    fontSize: hp(1.5),
    // borderWidth:1,
    // paddingHorizontal:wp(2)
  },
  price: {
    fontSize: hp(1.5),
  },
  pressed: {
    opacity: 0.7,
  },
});
