// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "./src/components/themeContext";
import { TransactionProvider } from "./src/components/transactionContext";
import HomeScreen from "./src/screens/HomeScreen";
import PixScreen from "./src/screens/PixScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <TransactionProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Pix" component={PixScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </TransactionProvider>
    </ThemeProvider>
  );
}
