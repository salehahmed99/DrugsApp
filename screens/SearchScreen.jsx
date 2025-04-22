import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import DrugList from "../components/Drug/DrugList";
import { COLORS } from "../constants/colors";
import IconButton from "../components/Buttons/IconButton";
import { useCallback, useContext, useEffect, useState } from "react";
import DrugsContextProvider, { DrugsContext } from "../store/drugs-context";
import SearchBox from "../components/SearchBox";
import { hp, wp } from "../helpers/common";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { fetchDrugs } from "../helpers/http";

function SearchScreen({ navigation }) {
  const drugsContext = useContext(DrugsContext);
  const [sortAsending, setSortAscending] = useState(true);

  const [displayedDrugs, setDisplayedDrugs] = useState(drugsContext.drugs);

  const [searchQuery, setSearchQuery] = useState("");
  const addDrugHandler = () => {
    navigation.navigate("ManageDrugScreen");
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    const getDrugs = async () => {
      if (isFocused) {
        const drugs = await fetchDrugs();
        drugsContext.setFetchedDrugs(drugs);
      }
    };
    getDrugs();  
  }, [isFocused]);

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
      <Text style={styles.title}>Search</Text>
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
export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    position: "relative",
  },
  title: {
    fontSize: hp(4),
    fontWeight: "bold",
    textAlign: "center",
    marginTop: hp(4),
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
    marginTop: hp(3),
    paddingHorizontal: wp(5),
    gap: wp(2),
  },
  searchContainer: {
    flex: 1,
  },
});
