import React from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  ImageBackground,
  View,
} from "react-native";

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
      <ImageBackground source={{ uri: props.backImage }} style={styles.image}>
        <Text style={styles.text} numberOfLines={2}>
          {props.title}
        </Text>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    height: 130,
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontFamily: "customBold",
  },
});

export default CategoryCard;
