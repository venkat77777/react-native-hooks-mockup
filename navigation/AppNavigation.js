import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppContextProvider, { AppConsumer } from "./context";
import LoginScreen from "./screens/Login/LoginScreen";

export default function AppNavigation() {
  function UserProvider() {
    
  }
  const Stack = createStackNavigator();
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}