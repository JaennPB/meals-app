import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import { MEALS } from "../data/dummyData";

import MealCard from "../components/MealCard";

const CategoryMealsScreen = (props) => {
  const { itemId } = props.route.params;

  const displayedItems = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(itemId) >= 0
  );

  const renderItem = (item) => {
    return (
      <MealCard
        onPress={() => {}}
        title={item.item.title}
        duration={item.item.duration}
        affordability={item.item.affordability}
        complexity={item.item.complexity}
        imageUrl={item.item.imageUrl}
      />
    );
  };

  return <FlatList data={displayedItems} renderItem={renderItem} />;
};

export default CategoryMealsScreen;
