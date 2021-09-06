import React, { useLayoutEffect, useState, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";

import { fetchMealDetails } from "../store/mealsSlice";

import theme from "../theme/theme";

const MealDetailsScreen = (props) => {
  const { id } = props.route.params;
  const meal = useSelector((state) => state.meals.mealDetails);
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    dispatch(fetchMealDetails(id));
  });

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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
      <Text style={styles.textTitle}>Ingredients</Text>
      {/* {meal.ingredients.map((ing) => (
        <View style={styles.itemContainer} key={ing}>
          <Entypo name="dot-single" size={24} color={theme.colors.primary} />
          <Text style={styles.normalText}>{ing}</Text>
        </View>
      ))} */}
      <Text style={styles.textTitle}>Preparation</Text>
      <View style={styles.itemContainer}>
        <Text style={styles.normalText}>{meal.strInstructions}</Text>
      </View>
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
