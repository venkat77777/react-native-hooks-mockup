import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppContextProvider, { AppConsumer } from "../context";
import LoginScreen from "./../Entities/Login/LoginScreen";

export default function AppNavigation() {
  const Stack = createStackNavigator();
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}