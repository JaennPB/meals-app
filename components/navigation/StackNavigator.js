import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AllCategoriesScreen from "../../screens/AllCategoriesScreen";
import CategoryMealsScreen from "../../screens/CategoryMealScreen";
import MealDetailsScreen from "../../screens/MealDetailsScreen";

import theme from "../../theme/theme";

const Stack = createNativeStackNavigator();

const StackNavigator = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerTintColor: theme.colors.primary,
        headerTitleStyle: {
          fontFamily: "customRegular",
          fontSize: 18,
        },
        headerBackTitleStyle: {
          fontFamily: "customRegular",
          fontSize: 15,
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
        options={({ route }) => ({
          title: route.params.itemTitle,
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
