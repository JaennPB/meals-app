import React, { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

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
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.text}>{selectedMeal.duration}min</Text>
        <Text style={styles.text}>{selectedMeal.complexity}</Text>
        <Text style={styles.text}>{selectedMeal.affordability}</Text>
      </View>
      <Text style={styles.textTitle}>Ingredients</Text>
      {selectedMeal.ingredients.map((ing) => (
        <View style={styles.itemContainer} key={ing}>
          <Entypo name="dot-single" size={24} color={theme.colors.primary} />
          <Text style={styles.normalText}>{ing}</Text>
        </View>
      ))}
      <Text style={styles.textTitle}>Preparation</Text>
      {selectedMeal.steps.map((step) => (
        <View style={styles.itemContainer} key={step}>
          <Entypo name="dot-single" size={24} color={theme.colors.primary} />
          <Text style={styles.normalText}>{step}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "customRegular",
    color: "white",
  },
  textTitle: {
    fontSize: 18,
    fontFamily: "customBold",
    textAlign: "center",
    paddingVertical: 20,
  },
  normalText: {
    fontFamily: "customRegular",
    paddingRight: 20,
  },
  image: {
    height: 250,
    width: "100%",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: theme.colors.accent,
    padding: 10,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },
});

export default MealDetailsScreen;
