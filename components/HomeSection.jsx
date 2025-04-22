import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useContext } from "react";
import { DrugsContext } from "../store/drugs-context";
import DrugItem from "./Drug/DrugItem";
import { hp, wp } from "../helpers/common";
import { COLORS } from "../constants/colors";

const HomeSection = ({ label }) => {
  const drugsContext = useContext(DrugsContext);
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          horizontal={true}
          data={drugsContext.drugs}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <DrugItem
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              id={item.id}
            />
            //   <View style={styles.item}>
            //     <Text style={styles.text}>{'saleh'}</Text>
            //   </View>
          )}
          keyExtractor={(drug) => drug.id}
        />
      </View>
    </View>
  );
};

export default HomeSection;

const styles = StyleSheet.create({
  container: {
    gap:hp(1)
  },
  label: {
    fontWeight:'600',
    fontSize:hp(2)
  },
  viewAll:{
    color:COLORS.secondary,
    fontSize:hp(1.8)

  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listContainer: {
    // borderWidth: 1,
    // flexDirection:'row'
  },
});
