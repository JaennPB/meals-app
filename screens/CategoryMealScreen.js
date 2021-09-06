import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import MealCard from "../components/MealCard";

import { fetchByCategory } from "../store/mealsSlice";

const CategoryMealsScreen = (props) => {
  const { type } = props.route.params;
  const mealsByCategory = useSelector((state) => state.meals.mealsByCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchByCategory(type));
  }, [dispatch]);

  const renderItem = ({ item }) => {
    return (
      <MealCard
        onPress={() => {
          props.navigation.navigate("MealDetails", {
            type: item.strMeal,
            id: item.idMeal,
          });
        }}
        title={item.strMeal}
        imageUrl={item.strMealThumb}
      />
    );
  };

  return (
    <FlatList
      data={mealsByCategory}
      keyExtractor={(item) => item.strMeal}
      renderItem={renderItem}
    />
  );
};

export default CategoryMealsScreen;
