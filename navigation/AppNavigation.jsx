import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageDrugScreen from "../screens/ManageDrugScreen";
import DrugDetailsScreen from "../screens/DrugDetailsScreen";
import AlternativesScreen from "../screens/AlternativesScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { supabase } from "../lib/supabase";

import MoreScreen from "../screens/MoreScreen";
import SearchScreen from "../screens/SearchScreen";
import HomeScreen from "../screens/HomeScreen";
import ViewAllScreen from "../screens/ViewAllScreen";
import { Platform } from "react-native";
import { useAuth } from "../store/auth-context";
import { useEffect } from "react";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";

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
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <BottomTab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
          tabBarLabel: "Search",
        }}
      />
      <BottomTab.Screen
        name="MoreScreen"
        component={MoreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu" size={size} color={color} />
          ),
          tabBarLabel: "More",
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function AppNavigation() {
  const { setAuthUser, authUser } = useAuth();
  // const [isStarting, setIsStarting] = useState(true);

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setAuthUser(session.user);
      } else {
        setAuthUser(null);
      }
      // setIsStarting(false);
    });
  }, []);

  // if (isStarting) {
  //   return <LoadingOverlay />; //Splash Screen
  // }
  return (
    <NavigationContainer>
      {authUser ? (
        <Stack.Navigator
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
              presentation: Platform.OS === "ios" ? "modal" : "card",
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
              // headerShown:false
            }}
          />
          <Stack.Screen
            name="AlternativesScreen"
            component={AlternativesScreen}
          />
          <Stack.Screen name="ViewAllScreen" component={ViewAllScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "white" },
          }}
        >
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              animationTypeForReplace: authUser ? "push" : "pop",
            }}
          />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
