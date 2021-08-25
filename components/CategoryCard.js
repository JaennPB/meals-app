import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";

const CategoryCard = (props) => {
  const cardStyles = (pressed) => {
    let updatedStyles = [
      styles.itemContainer,
      { backgroundColor: props.color },
    ];

    if (pressed) {
      updatedStyles.push({ opacity: 0.7 });
    }

    return updatedStyles;
  };

  return (
    <Pressable
      style={({ pressed }) => cardStyles(pressed)}
      onPress={props.onPress}
    >
      <Text style={styles.text} numberOfLines={2}>
        {props.title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    height: 130,
    padding: 15,
    margin: 15,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontFamily: "customBold",
  },
});

export default CategoryCard;
