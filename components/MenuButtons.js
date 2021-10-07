import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import OneButton from './OneButton'
const items = [
  {
    id: 1,
    name: "video-camera",
    title: "New Meeting",
    customColor: 'orange'
  },
  {
    id: 2,
    name: "plus-square",
    title: "Join",
  },
  {
    id: 3,
    name: "calendar",
    title: "Schedule",
  },
  {
    id: 4,
    name: "upload",
    title: "Share Screen",
  },
];

function MenuButtons({navigation}) {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <OneButton
          navigation={navigation}
          key={index}
          name={item.name}
          title={item.title}
          customColor={item.customColor}
        />
      ))}
    </View>
  );
};
export default MenuButtons;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingBottom: 10,
    borderBottomColor: "#1F1F1F",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },

});
