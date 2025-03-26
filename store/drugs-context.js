import { createContext, useState } from "react";

export const DrugsContext = createContext({
  drugs: [],
  addDrug: () => {},
  editDrug: () => {},
  deleteDrug: () => {},
});

function DrugsContextProvider({ children }) {
  const [drugs, setDrugs] = useState([]);

  const addDrug = (id, name) => {
    setDrugs((p) => [...p, { id: id, name: name }]);
  };

  const editDrug = (id, name) => {
    setDrugs((p) =>
      p.map((drug) => (drug.id === id ? { id: id, name: name } : drug))
    );
  };

  const deleteDrug = (id) => {
    setDrugs((p) => p.filter((item) => item.id !== id));
  };

  const value = {
    drugs: drugs,
    addDrug: addDrug,
    editDrug: editDrug,
    deleteDrug: deleteDrug
  };
  return (
    <DrugsContext.Provider value={value}>{children}</DrugsContext.Provider>
  );
}
export default DrugsContextProvider;
