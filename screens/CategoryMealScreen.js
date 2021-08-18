import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import { MEALS } from "../data/dummyData";

const CategoryMealsScreen = (props) => {
  const { itemId } = props.route.params;

  const displayedItems = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(itemId) >= 0
  );

  const renderItem = (item) => {
    return (
      <View>
        <Text>{item.item.title}</Text>
      </View>
    );
  };

  return <FlatList data={displayedItems} renderItem={renderItem} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoryMealsScreen;
