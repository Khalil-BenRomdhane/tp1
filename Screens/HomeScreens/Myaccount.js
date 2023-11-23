import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from 'firebase/compat';
export default function MyAccount() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
const app=firebase.database();
  const handlePress = () => {
    // Handle button press, you can implement the logic you need here
    console.log('Button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Account</Text>

      {/* Image */}
      <Image
        source={require('tp1/Screens/HomeScreens/Myaccount.js')}
        style={styles.image}
      />

      {/* TextFields for Name and Number */}
      <TextInput
        style={styles.input}
        placeholder="Nom et Prénom"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Numéro"
        value={number}
        onChangeText={(text) => setNumber(text)}
        keyboardType="numeric"
      />

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});
