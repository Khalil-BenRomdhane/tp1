import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
    Alert,
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import firebase from "../Config";

export default function Register({ navigation }) {
  const auth=firebase.auth()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname,setFullname]=useState("")
  const [useName,setUsername]=useState("")
  const[confirmPassword,setconfirmPassword]=useState("")
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
            Create User
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
          <TextInput
        
          style={styles.TextInput}
          placeholder="Full name"
    
          onChangeText={(text) => {
            setFullname(text);
          }}
        ></TextInput>
        <TextInput
        style={styles.TextInput}
        placeholder="UserName"
        onChangeText={(text) => {
          setUsername(text);
        }}
      ></TextInput>
      <TextInput
        
      style={styles.TextInput}
      placeholder="Confirm password"

      onChangeText={(text) => {
        setconfirmPassword(text);
      }}
    ></TextInput>
          <Button style={{margin:10}}
            onPress={() => {
              if(password==confirmPassword)
               {
                     auth.createUserWithEmailAndPassword(email,password)
                     .then(()=>{
                        

                     })
                     .catch((err)=>{
                        alert(err)
                     })
                     
                     
                     
               }
               else{
                alert("password not match")
               }
              
            }}
            title="Register"
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
    width:'100%'
    
  },
  TextInput: {
    width: "80%",
    height: "10%",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 15,
  },
  Button: {},
});
