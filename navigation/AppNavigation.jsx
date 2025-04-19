import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrugsScreen from "../screens/DrugsScreen";
import ManageDrugScreen from "../screens/ManageDrugScreen";
import DrugDetailsScreen from "../screens/DrugDetailsScreen";
import AlternativesScreen from "../screens/AlternativesScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import AboutScreen from "../screens/AboutScreen";

const Stack = createNativeStackNavigator();

const BottomTab = createBottomTabNavigator();
function DrawerNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: "white" },
        tabBarActiveTintColor: COLORS.secondary,
      }}
    >
      <BottomTab.Screen
        name="DrugsScreen"
        component={DrugsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <BottomTab.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information" size={size} color={color} />
          ),
          tabBarLabel: "About",
        }}
      />
    </BottomTab.Navigator>
  );
}
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomTabScreen"
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="BottomTabScreen"
          component={DrawerNavigator}
          options={{
            headerShown: false,
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
            headerTitleAlign: "center",
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen
          name="AlternativesScreen"
          component={AlternativesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
