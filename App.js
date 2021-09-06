import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";

import DrawerNavigator from "./components/navigation/DrawerNavigator";
import store from "./store/store";

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
      <Provider store={store}>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
};

export default App;
