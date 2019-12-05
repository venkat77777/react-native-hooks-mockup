import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View, TextInput } from "react-native";

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputBox} placeholder="User Name" />
        <TextInput style={styles.inputBox} placeholder="Password" />
        <Button
          title="Login"
          onPress={() => {}} color="black"
          style={styles.loginButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#b58c3c",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputBox: {
    borderRadius: 40 ,
    marginTop:10,
    marginBottom:10,
    height: 50,
    width: "80%",
    borderColor: "white",
    borderWidth: 1,
    padding: 10
  },
  loginButton: {
    backgroundColor: "#b58c3c",
    height: 200,
    width: 200,
    marginTop: 30
  }
});

export default LoginScreen;
