import { NavigationContainer } from "@react-navigation/native";
import Auth from "./Screens/Auth";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Register from "./Screens/Register"
export default function App() {
  const Stack = createNativeStackNavigator();
  return(
  <NavigationContainer>
    <Stack.Navigator
    headerOptions={{
      headerShown:false
    }}
    >
      <Stack.Screen name="Auth" component={Auth} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />  
    </Stack.Navigator>
  </NavigationContainer>);
}
