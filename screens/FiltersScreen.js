import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import FilterSwitch from "../components/FilterSwitch";

import theme from "../theme/theme";

const FiltersScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      headerTintColor: theme.colors.primary,
      headerTitleStyle: {
        fontFamily: "customRegular",
        fontSize: 18,
      },
      headerLeft: () => {
        return (
          <Pressable onPress={() => props.navigation.openDrawer()}>
            <Ionicons
              name="md-menu-outline"
              size={33}
              color={theme.colors.secondary}
              style={{ marginLeft: 15, marginRight: -6 }}
            />
          </Pressable>
        );
      },
    });
  });

  return (
    <View style={styles.filtersContainer}>
      <Text style={styles.title}>Availible Filters</Text>
      <FilterSwitch
        title="Gluten-free"
        value={isGlutenFree}
        valueHandler={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        title="Lactose-free"
        value={isLactoseFree}
        valueHandler={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        title="Vegan"
        value={isVegan}
        valueHandler={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        title="Vegetarian"
        value={isVegetarian}
        valueHandler={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    padding: 20,
    fontFamily: "customBold",
    fontSize: 18,
    color: theme.colors.primary,
  },
  filtersContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default FiltersScreen;
