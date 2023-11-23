import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import firebase from "../Config";

export default function Auth({ navigation }) {
  const auth = firebase.auth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const refInput2 = useRef();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("tp1/assets/backjpg.jpg")}
        style={{
          height: "100%",
          width: "100%",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "85%",
            height: "auto",
            backgroundColor: "#0005",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              fontSize: 32,
              fontWeight: "bold",
              color: "white",
              margin: 10,
            }}
          >
            Authetification
          </Text>
          <TextInput
            style={styles.TextInput}
            placeholder="Saisir votre Email"
            onChangeText={(text) => {
              setEmail(text);
            }}
            onSubmitEditing={() => {
              refInput2.current.focus();
            }}
            blurOnSubmit={false}
          ></TextInput>
          <TextInput
            ref={refInput2}
            style={styles.TextInput}
            placeholder="Saisir votre Mot de passe"
            secureTextEntry={true}
            onChangeText={(text) => {
              setPassword(text);
            }}
          ></TextInput>
          <Button
            style={styles.Button}
            onPress={() => {
              auth.signInWithEmailAndPassword(email, password).then(() => {
                alert("logged in");
                navigation.navigate("Home");
              });
            }}
            title="Sign In"
          ></Button>
          <Button
            title="Register"
            onPress={(e) => {
              navigation.navigate("Register");
            }}
            style={{margin:10}}
          ></Button>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    width: "80%",
    height: "15%",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 15,
  },
  Button: {
    color: "white",
    margin: 15,
  },
});
