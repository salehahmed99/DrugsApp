import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { DrugsContext } from "../store/drugs-context";
import DrugList from "../components/Drug/DrugList";

const AlternativesScreen = ({ route, navigation }) => {
  const drugId = route.params.drugId;
  const drugsContext = useContext(DrugsContext);
  const mainDrug = drugsContext.drugs.find((drug) => drug.id === drugId);

  const [alternatives, setAlternatives] = useState([]);
  useEffect(() => {
    navigation.setOptions({
      title: ` Alternatives for ${mainDrug.name.split(" ")[0]}`,
      headerTitleAlign: "center",
      headerBackTitle: "Back",
    });
    const mainDrugContents = mainDrug.contents.split("+");
    for (let drug of drugsContext.drugs) {
      for (let drugContent of mainDrugContents) {
        const crntDrugContents = drug.contents.split("+");
        if (crntDrugContents.includes(drugContent) && drug.id !== drugId) {
          setAlternatives((p) => [...p, drug]);
          break;
        }
      }
    }
  }, []);

  return <DrugList drugs={alternatives} hideAlternatives={true} />;
};

export default AlternativesScreen;

const styles = StyleSheet.create({});
