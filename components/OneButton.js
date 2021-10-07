import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";


const OneButton = ({name, title, customColor, navigation}) => {

  const openMeeting = () => {
    navigation.navigate("Room");
  }
    return (
      <View style={styles.container}>
        <TouchableOpacity  onPress={()=>openMeeting()}
          style={{
            ...styles.button,
            backgroundColor: customColor ? customColor : "#0470DC",
          }}
        >
          <FontAwesome name={name} size={23} color={"#efefef"} />
        </TouchableOpacity>
        <Text style={styles.menuText}>{title}</Text>
      </View>
    );
}

export default OneButton


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },

  button: {
    width: 50,
    height: 50,    
    justifyContent: "center",
    backgroundColor: 'blue',
    alignItems: "center",
    borderRadius: 15,
  },
  menuText: {
    color: "#858585",
    fontSize: 12,
    paddingTop: 10,
    fontWeight: "600",
  },
});
