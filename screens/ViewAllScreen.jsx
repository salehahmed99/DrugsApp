import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { DrugsContext } from "../store/drugs-context";
import { wp } from "../helpers/common";
import DrugItem from "../components/Drug/DrugItem";

const ViewAllScreen = ({ navigation, route }) => {
  const title = route.params.title;
  const drugsContext = useContext(DrugsContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={drugsContext.drugs}
        keyExtractor={(drug) => drug.id}
        renderItem={({ item }) => (
          <DrugItem
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            id={item.id}
          />
        )}
        numColumns={3}
      />
    </View>
  );
};

export default ViewAllScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: wp(5),
        // borderWidth:1,
    }
});
