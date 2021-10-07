import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Platform,
  Keyboard,
} from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ChatHeader from "./ChatHeader";

const Chat = ({ modalVisible, setModalVisible }) => {
  const [messageText, setMessageText] = useState();

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: "100%" }}>
        <KeyboardAvoidingView
          behaviour={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
        
              <ChatHeader setModalVisible={setModalVisible} />
              {/* Chat Messages */}

              <View style={styles.chatMessages}></View>

              {/* Type messages  */}
              <View style={styles.chatFormContainer}>
                <Text style={{ color: "white" }}>Send to: Eveyone</Text>
                <View style={styles.chatForm}>
                  <TextInput
                    value={messageText}
                    onChangeText={(text) => setMessageText(text)}
                    style={styles.textInput}
                    placeholder={"Tap here to chat"}
                    placeholderTextColor={"#595859"}
                  />
                  <TouchableOpacity
                    onPress={() => alert("Pressed!")}
                    style={{
                      ...styles.button,
                      backgroundColor: messageText ? "#0B71EB" : "#373838",
                    }}
                  >
                    <FontAwesome name="send" size={18} color="#efefef" />
                  </TouchableOpacity>
                </View>
              </View>
          
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
  },
  chatMessages: { flex: 1 },
  chatFormContainer: {
    borderColor: "#2f2f2f",
    borderTopWidth: 1,
    padding: 12,
  },
  textInput: {
    height: 40,
    color: "#efefef",
    borderColor: "#595859",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 12,
    flex: 1,
  },
  chatForm: {
    flexDirection: "row",
  },
  button: {
    height: 40,
    width: 40,
    marginTop: 12,
    marginLeft: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
