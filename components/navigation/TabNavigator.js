import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import StackNavigator from "./StackNavigator";
import FavoritesScreen from "../../screens/FavoritesScreen";
import theme from "../../theme/theme";

const Tabs = createBottomTabNavigator();

const TabNavigator = (props) => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.accent,
        tabBarLabelStyle: {
          fontFamily: "customRegular",
          fontSize: 12,
        },
        tabBarStyle: {
          padding: 5,
        },
      }}
    >
      <Tabs.Screen
        name="Meals"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons name="fast-food-outline" size={24} color={color} />
            );
          },
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <MaterialIcons name="favorite" size={24} color={color} />;
          },
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            fontSize: 12,
            backgroundColor: theme.colors.secondary,
            color: "white",
          },
          headerTitle: "Your Favorites!",
          headerTintColor: theme.colors.secondary,
          headerTitleStyle: {
            fontFamily: "customRegular",
            fontSize: 18,
          },
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
