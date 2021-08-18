import React from "react";
import { FlatList } from "react-native";

import CategoryCard from "../components/CategoryCard";

import { CATEGORIES } from "../data/dummyData";

const CategoriesScreen = (props) => {
  const renderItem = (item) => {
    return (
      <CategoryCard
        title={item.item.title}
        color={item.item.color}
        onPress={() => {
          props.navigation.navigate("CategoryMeals", {
            itemId: item.item.id,
            itemTitle: item.item.title,
          });
        }}
      />
    );
  };

  return <FlatList data={CATEGORIES} renderItem={renderItem} numColumns={2} />;
};

export default CategoriesScreen;
