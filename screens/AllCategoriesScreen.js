import React, { useLayoutEffect, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pressable, FlatList, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import CategoryCard from "../components/CategoryCard";

import { fetchCategories } from "../store/mealsSlice";

import theme from "../theme/theme";

const CategoriesScreen = (props) => {
  const mealCategories = useSelector((state) => state.meals.AllCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

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

  const renderItem = ({ item }) => {
    return (
      <CategoryCard
        title={item.strCategory}
        color="lightblue"
        backImage={item.strCategoryThumb}
        onPress={() => {
          props.navigation.navigate("CategoryMeals", {
            type: item.strCategory,
          });
        }}
      />
    );
  };

  return (
    <FlatList
      data={mealCategories}
      keyExtractor={(item) => item.strCategory}
      renderItem={renderItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
