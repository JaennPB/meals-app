import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import FiltersScreen from "../../screens/FiltersScreen";
import TabNavigator from "./TabNavigator";

import theme from "../../theme/theme";

const Drawer = createDrawerNavigator();

const DrawerNavigator = (props) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: theme.colors.secondary,
        drawerLabelStyle: {
          fontFamily: "customRegular",
          fontSize: 15,
        },
        swipeEnabled: false,
      }}
    >
      <Drawer.Screen name="Meals" component={TabNavigator} />
      <Drawer.Screen name="Filters" component={FiltersScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
