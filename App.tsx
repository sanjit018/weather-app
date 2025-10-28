import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faInfo } from "@fortawesome/free-solid-svg-icons";

// Import your screens
import Starter from "./screen/Starter";
import Home from "./screen/Home";
import Details from "./screen/Details";
import {WeatherProvider} from "./screen/WeatherContext"
import LinearGradient from "react-native-linear-gradient";
const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();

// ✅ Bottom Tab Navigator
const Tabs = () => {
  return (
    <WeatherProvider>
      <Bottom.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#007bff",
          tabBarInactiveTintColor: "gray",
          tabBarBackground: () => (
            <LinearGradient
              colors={['#6325e7ff', '#c21cd4ff']} // customize your gradient
              style={{ flex: 1 }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
          ),
          tabBarIcon: ({ color, size }) => {
            // ✅ use the actual icon variables (not strings)
            let icon;
            if (route.name === "Home") icon = faHome;
            else if (route.name === "Details") icon = faInfo;

            return <FontAwesomeIcon icon={icon} size={size} color={color} />;
          },
        })}
      >
        <Bottom.Screen name="Home" component={Home} options={{animation:'fade'}} />
        <Bottom.Screen name="Details" component={Details} options={{animation:'fade'}} />
      </Bottom.Navigator>
    </WeatherProvider>
  );
};

// ✅ Stack Navigator
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Starter">
          <Stack.Screen
            name="Starter"
            component={Starter}
            options={{ headerShown: false }}
          />
          {/* Main screen holds bottom tabs */}
          <Stack.Screen
            name="Main"
            component={Tabs}
            options={{ headerShown: false ,animation:'slide_from_left'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
