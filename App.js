import { StatusBar } from "expo-status-bar";
import AppNavigation from "./navigation/AppNavigation";
import DrugsContextProvider from "./store/drugs-context";

export default function App() {
  return (
    <>
    <StatusBar style="auto"/>
      <DrugsContextProvider>
        <AppNavigation />
      </DrugsContextProvider>
    </>
  );
}
