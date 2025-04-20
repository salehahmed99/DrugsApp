import { View, Text, FlatList, StyleSheet } from "react-native";
import Drug from "./Drug";
import Separator from "./Separator";
export default function DrugList({ drugs, hideAlternatives = false }) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={drugs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Drug id={item.id} hideAlternatives={hideAlternatives} />}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  listContainer: {
    marginTop: 20,
    flex: 1,
  },
});
