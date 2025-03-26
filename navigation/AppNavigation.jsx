import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrugsScreen from "../screens/DrugsScreen";
import ManageDrugScreen from "../screens/ManageDrugScreen";
import DrugDetailsScreen from "../screens/DrugDetailsScreen";

const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrugsScreen">
        <Stack.Screen
          name="DrugsScreen"
          component={DrugsScreen}
          options={{
            headerShown: false,
            contentStyle: { backgroundColor: "white" },
          }}
        />
        <Stack.Screen
          name="ManageDrugScreen"
          component={ManageDrugScreen}
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DrugDetailsScreen"
          component={DrugDetailsScreen}
          options={{
            title: "Drug Details",
            contentStyle: { backgroundColor: "white" },
            headerBackTitle:'Back'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
