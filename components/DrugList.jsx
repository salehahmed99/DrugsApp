import { View, Text, FlatList, StyleSheet } from "react-native";
import Drug from "./Drug";
export default function DrugList({ drugs }) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={drugs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Drug {...item} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  listContainer: {
    flex:1,
    marginTop:20,
  },
});
