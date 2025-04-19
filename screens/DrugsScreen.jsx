import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import DrugList from "../components/DrugList";
import { COLORS } from "../constants/colors";
import IconButton from "../components/IconButton";
import { useContext, useEffect, useState } from "react";
import DrugsContextProvider, { DrugsContext } from "../store/drugs-context";
import SearchBox from "../components/SearchBox";

function DrugsScreen({ navigation }) {
  const drugsContext = useContext(DrugsContext);
  const [sortAsending, setSortAscending] = useState(true);

  const [displayedDrugs, setDisplayedDrugs] = useState(drugsContext.drugs);

  const [searchQuery, setSearchQuery] = useState("");
  const addDrugHandler = () => {
    navigation.navigate("ManageDrugScreen");
  };

  useEffect(() => {
    const filteredDrugs = drugsContext.drugs.filter((drug) =>
      drug.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );
    setDisplayedDrugs(filteredDrugs);
  }, [searchQuery, drugsContext.drugs]);
  const sortDisplayedDrugs = () => {
    const sortedDrugs = [...displayedDrugs].sort((a, b) => {
      if (sortAsending) {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setDisplayedDrugs(sortedDrugs);
    setSortAscending(!sortAsending);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drug List</Text>
      <View style={styles.searchOuterContainer}>
        <View style={styles.searchContainer}>
          <SearchBox onChangeText={setSearchQuery} value={searchQuery} />
        </View>
        <IconButton
          onPress={sortDisplayedDrugs}
          style={styles.sortButton}
          icon="sort"
          size={24}
        />
        <IconButton
          icon="add"
          style={styles.addDrugButton}
          onPress={addDrugHandler}
          size={24}
        />
      </View>
      <DrugList drugs={displayedDrugs} />
    </View>
  );
}
export default DrugsScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    position: "relative",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
    color: COLORS.secondary,
  },

  addDrugButton: {
    backgroundColor: COLORS.primary,
  },
  sortButton: {
    backgroundColor: COLORS.secondary,
  },
  searchOuterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
    gap: 10,
  },
  searchContainer: {
    flex: 1,
  },
});
