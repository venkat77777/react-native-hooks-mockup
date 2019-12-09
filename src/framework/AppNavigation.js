import React from "react";
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from "./../Entities/Login/LoginScreen";
import {UserProvider} from "../Store/UserDataProvider";

export default function AppNavigation() {
  const Stack = createStackNavigator();
  return (
    <NavigationNativeContainer>
      <Stack.Navigator headerMode={'none'}>
        <UserProvider>
          <Stack.Screen name="Login" component={LoginScreen}/>
        </UserProvider>
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}