import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home'
import TextCapture from './screens/TextCapture'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component = {Home}/>
        <Stack.Screen name = "Camera" component = {TextCapture}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
