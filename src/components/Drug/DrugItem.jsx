import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import { hp, wp } from "../../helpers/common";
import { useNavigation } from "@react-navigation/native";
import { DrugsContext } from "../../store/drugs-context";
import { Skeleton } from "react-native-skeletons";

const ITEMS_PER_PAGE = 3;
const HORIZONTAL_PADDING = wp(5);
const SPACING = wp(1);
const SCREEN_WIDTH = wp(100);
const ITEM_WIDTH =
  (SCREEN_WIDTH - 2 * HORIZONTAL_PADDING - 2 * SPACING) / ITEMS_PER_PAGE;

const DrugItem = ({ imageUrl, name, price, id }) => {
  const navigation = useNavigation();
  const { loading } = useContext(DrugsContext);
  const [imageLoading, setImageLoading] = useState(false);
  const onDrugPressed = () => {
    navigation.navigate("DrugDetailsScreen", {
      drugId: id,
    });
  };

  const exactPrice = price.split(">")[1].substring(1);
  return (
    <Pressable
      onPress={onDrugPressed}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: imageUrl }}
            style={[
              styles.image,
              (loading || imageLoading) && styles.hiddenImage,
            ]}
            resizeMode="contain"
            // onLoadStart={() => {
            //   setImageLoading(true);
            // }}
            onLoad={() => {
              setImageLoading(false);
            }} // Image has loaded
          />
          {(loading || imageLoading) && (
            <Skeleton height={"100%"} width={"100%"} style={styles.skeleton} />
          )}
        </View>

        <View style={styles.textContainer}>
          {(loading) ? (
            <Skeleton height="50%" width="100%" />
          ) : (
            <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
              {name}
            </Text>
          )}
          {(loading) ? (
            <Skeleton height="50%" width="100%" />
          ) : (
            <Text style={styles.price} numberOfLines={2} ellipsizeMode="tail">
              {exactPrice}
            </Text>
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default DrugItem;

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    marginHorizontal: SPACING,
    height: hp(20),
    gap: hp(1),
    alignItems: "center",
  },
  imageContainer: {
    // borderWidth: 1,
    width: "100%",
    height: hp(13),
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
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
  },
  textContainer: {
    width: "100%",
    height: hp(5),
    // justifyContent: "center",
    gap: hp(0.5),
    // borderWidth:1,
  },
  name: {
    // flexWrap: "wrap",
    // flexShrink: 1,
    fontSize: hp(1.5),
    // borderWidth:1,
    // paddingHorizontal:wp(2)
  },
  price: {
    fontSize: hp(1.2),
  },
  pressed: {
    opacity: 0.7,
  },
});
