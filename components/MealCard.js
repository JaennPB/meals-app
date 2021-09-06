import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";

import theme from "../theme/theme";

const MealCard = (props) => {
  return (
    <View style={styles.mealContainer}>
      <Pressable onPress={props.onPress}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={{ uri: props.imageUrl }}
            style={styles.image}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{props.title}</Text>
            </View>
          </ImageBackground>
        </View>
        {/* <View style={styles.infoContainer}> */}
        {/* <Text style={styles.infoText}>{props.duration}min</Text>
          <Text style={styles.infoText}>{props.complexity}</Text>
          <Text style={styles.infoText}>{props.affordability}</Text> */}
        {/* </View> */}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealContainer: {
    margin: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  imageContainer: {
    height: 200,
    width: "100%",
  },
  titleContainer: {
    backgroundColor: theme.colors.accent + 70,
  },
  title: {
    fontSize: 20,
    fontFamily: "customBold",
    padding: 10,
    color: "white",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  infoContainer: {
    backgroundColor: "grey",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 30,
  },
  infoText: {
    color: "white",
    fontFamily: "customRegular",
    fontSize: 16,
  },
});

export default MealCard;
