import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import fonts from "./theme/fonts";
import theme from "./theme/theme";

import AllCategoriesScreen from "./screens/AllCategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();
enableScreens();

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
        <Stack.Navigator
          initialRouteName="Categories"
          screenOptions={{
            headerTintColor: theme.colors.primary,
            headerTitleStyle: {
              fontFamily: fonts.regularText.fontFamily,
            },
          }}
        >
          <Stack.Screen
            name="AllCategories"
            component={AllCategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="CategoryMeals"
            component={CategoryMealsScreen}
            options={({ route }) => ({
              title: route.params.itemTitle,
            })}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
            options={{ title: "Meal details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
