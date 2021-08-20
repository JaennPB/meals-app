import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { MEALS } from "../data/dummyData";

import theme from "../theme/theme";

const MealDetailsScreen = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable
            onPress={() => {
              setIsFavorite((oldState) => !oldState);
            }}
          >
            <MaterialIcons
              name={isFavorite ? "favorite" : "favorite-outline"}
              size={23}
              color={theme.colors.accent}
            />
          </Pressable>
        );
      },
    });
  });

  const { itemId } = props.route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === itemId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MealDetailsScreen;
