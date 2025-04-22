import { createContext, useState } from "react";
import { DRUGS } from "../constants/drugs";

export const DrugsContext = createContext({
  drugs: [],
  addDrug: () => {},
  editDrug: () => {},
  deleteDrug: () => {},
  setFetchedDrugs: () => {},
  setLoading: () => {},
  loading: false,
});

function DrugsContextProvider({ children }) {
  const [drugs, setDrugs] = useState([]);
  const [loading, setLoading] = useState(false);

  const addDrug = (newDrug) => {
    setDrugs((p) => [...p, newDrug]);
  };

  const editDrug = (drugId, drugDetails) => {
    setDrugs((p) =>
      p.map((drug) =>
        drug.id === drugId ? { id: drugId, ...drugDetails } : drug
      )
    );
  };

  const deleteDrug = (id) => {
    setDrugs((p) => p.filter((drug) => drug.id !== id));
  };

  const setFetchedDrugs = (drugs) => {
    setDrugs(drugs);
  };

  const value = {
    drugs,
    addDrug,
    editDrug,
    deleteDrug,
    setFetchedDrugs,
    setLoading,
    loading
  };
  return (
    <DrugsContext.Provider value={value}>{children}</DrugsContext.Provider>
  );
}
export default DrugsContextProvider;
