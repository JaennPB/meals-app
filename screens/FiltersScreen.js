import React, { useLayoutEffect } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import theme from "../theme/theme";

const FiltersScreen = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      headerTintColor: theme.colors.primary,
      headerTitleStyle: {
        fontFamily: "customRegular",
        fontSize: 18,
      },
      headerLeft: () => {
        return (
          <Pressable onPress={() => props.navigation.openDrawer()}>
            <Ionicons
              name="md-menu-outline"
              size={33}
              color={theme.colors.secondary}
              style={{ marginLeft: 15, marginRight: -6 }}
            />
          </Pressable>
        );
      },
    });
  });

  return (
    <View style={styles.screen}>
      <Text>The filters screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FiltersScreen;
