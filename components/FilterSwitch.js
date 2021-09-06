import React from "react";
import { StyleSheet, View, Text, Switch } from "react-native";

import theme from "../theme/theme";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.text}>{props.title}</Text>
      <Switch
        trackColor={{ true: theme.colors.accent, false: "#ccc" }}
        thumbColor="white"
        onValueChange={props.valueHandler}
        value={props.value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    width: "85%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  text: {
    fontFamily: "customRegular",
  },
});

export default FilterSwitch;
