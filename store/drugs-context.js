import { createContext, useState } from "react";
import { DRUGS } from "../constants/drugs";

export const DrugsContext = createContext({
  drugs: [],
  addDrug: () => {},
  editDrug: () => {},
  deleteDrug: () => {},
});

function DrugsContextProvider({ children }) {
  const [drugs, setDrugs] = useState(DRUGS);

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

  const value = {
    drugs: drugs,
    addDrug: addDrug,
    editDrug: editDrug,
    deleteDrug: deleteDrug,
  };
  return (
    <DrugsContext.Provider value={value}>{children}</DrugsContext.Provider>
  );
}
export default DrugsContextProvider;
