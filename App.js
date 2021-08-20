import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import TabNavigator from "./components/navigation/TabNavigator";

const App = () => {
  let [fontsLoaded] = useFonts({
    customLight: require("./assets/fonts/Montserrat-ExtraLight.ttf"),
    customRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
    customBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    );
  }
};

export default App;
