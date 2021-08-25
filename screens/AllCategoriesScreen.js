import React, { useLayoutEffect } from "react";
import { Pressable, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import CategoryCard from "../components/CategoryCard";
import { CATEGORIES } from "../data/dummyData";

import theme from "../theme/theme";

const CategoriesScreen = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => {
        return (
          <Pressable onPress={() => props.navigation.openDrawer()}>
            <Ionicons
              name="md-menu-outline"
              size={33}
              color={theme.colors.secondary}
              style={{ marginRight: 10 }}
            />
          </Pressable>
        );
      },
    });
  });

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
