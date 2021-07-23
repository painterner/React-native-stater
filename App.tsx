import React from "react";
import { AppWithOverlay } from "./src/AppWithOverlay";
import { Provider } from "react-redux";
import { rootStore } from "./src/store/store";
import { createStackNavigator } from "@react-navigation/stack";
import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect } from "react";
import { useFonts } from 'expo-font';
import { LoginScreen } from "src/screens/login";
import { NavigationContainer } from "@react-navigation/native";
import { ProductSearchScreen } from "src/screens/product-search";
import { ProductPriceComparisionScreen } from "src/screens/product-price-comparision";
import { NavigationScreen } from "src/screens/navigation";
import { NoteScreen } from "src/screens/note";
import { TesterScreen } from "src/screens/tester";
import { Tester1Screen } from "src/screens/tester/Tester1";

const Stack = createStackNavigator()

export default function App() {
  const [loaded] = useFonts({
    OpenSansBold: require('./src/assets/fonts/OpenSans-Bold.ttf'),
    OpenSans: require('./src/assets/fonts/OpenSans-Regular.ttf'),
    OpenSansSemiBold: require('./src/assets/fonts/OpenSans-SemiBold.ttf'),
    FuturaBold: require('./src/assets/fonts/Futura-Bold.ttf'),
  });

  useEffect(() => {
    ScreenOrientation.unlockAsync()
  }, [])
  return (
    <Provider store={rootStore}>
      {
        loaded && <AppWithOverlay>
          <NavigationContainer >
            <Stack.Navigator>
              <Stack.Screen options={{headerShown: false}} name="navigation" component={NavigationScreen}/>
              <Stack.Screen options={{headerShown: false}} name="note" component={NoteScreen}/>
              <Stack.Screen options={{headerShown: false}} name="tester" component={TesterScreen}/>
              <Stack.Screen options={{headerShown: false}} name="tester1" component={Tester1Screen}/>
            </Stack.Navigator>
          </NavigationContainer>
        </AppWithOverlay>
      }

    </Provider>
  );
}
