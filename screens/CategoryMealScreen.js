import React from "react";
import { FlatList } from "react-native";

import MealCard from "../components/MealCard";
import { MEALS } from "../data/dummyData";

const CategoryMealsScreen = (props) => {
  const { itemId } = props.route.params;

  const displayedItems = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(itemId) >= 0
  );

  const renderItem = (item) => {
    return (
      <MealCard
        onPress={() => {
          props.navigation.navigate("MealDetails", {
            itemId: item.item.id,
            itemTitle: item.item.title,
          });
        }}
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
