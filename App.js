import { StatusBar } from "expo-status-bar";
import AppNavigation from "./navigation/AppNavigation";
import DrugsContextProvider from "./store/drugs-context";
import { AuthProvider } from "./store/auth-context";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AuthProvider>
        <DrugsContextProvider>
          <AppNavigation />
        </DrugsContextProvider>
      </AuthProvider>
    </>
  );
}
