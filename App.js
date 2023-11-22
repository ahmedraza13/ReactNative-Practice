import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const PressHandler = () => {
    console.log(userName, password);
    
  }

   
  return (
    <View style={styles.container}>
      <View style={{ width: "80%" , paddingBottom: 20  }}>
    <TextInput
      placeholder="Enter your name"
      style={{
        borderWidth: 1,
        borderColor: "black",
        padding: 20,
        color: "black",
      }}
      onChangeText={(e) => {
        setUserName(e);
      }}
      numberOfLines={1}
    />
    </View>
    <View style={{ width: "80%" }}>
    <TextInput
      placeholder="Enter your Password"
      style={{
        borderWidth: 1,
        borderColor: "black",
        padding: 20,
        color: "black",
      }}
      onChangeText={(e) => {
        setPassword(e);
      }}
      numberOfLines={1}
    />
    </View>

    <TouchableOpacity onPress={PressHandler}>
      <Text style={{ color: "white", paddingTop: 20, fontSize: 20, fontWeight: "bold"}}>Login</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});
