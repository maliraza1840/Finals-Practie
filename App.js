import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { pets1 } from './data/pets'; 

export default function App() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');

  const [loadedfont, error] = useFonts({
    light: require("./assets/poppinsfont/Poppins-Light.ttf"),
    medium: require("./assets/poppinsfont/Poppins-Medium.ttf"),
    bold: require("./assets/poppinsfont/Poppins-Bold.ttf"),
    extrabold: require("./assets/poppinsfont/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/poppinsfont/Poppins-SemiBold.ttf"),
  });

  if (!loadedfont && !error) {
    return null;
  }

  return (
      
      <ScrollView style={styles.vscroll} contentContainerStyle={{alignItems:"center",justifyContent:"center"}}>
        <StatusBar style="auto" />
        <TextInput
          style={styles.inputbox}
          placeholderTextColor={"yellow"}
          placeholder='Enter Name'
          value={name}
          onChangeText={(text) => setname(text)}
        />
        <TextInput
          style={styles.inputbox}
          placeholder='Enter Email'
          placeholderTextColor={"yellow"}
          value={email}
          onChangeText={(text) => setemail(text)}
          numberOfLines={8}
        />

        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.8}
          onPress={() => Alert.alert("Check Values Please", `Name is: ${name}\n` + `Email is: ${email}`, [{ text: "Ok", onPress: () => Alert.alert("Btn Check", "Button Checked") }])}
        >
          <Text style={styles.itxt}>Save</Text>
        </TouchableOpacity>

        {pets1.map((p) => (
          <View key={p.id} style={styles.petcard}>
            <Image style={styles.img} source={p.image} />
            <Text style={styles.txt1}>Name: {p.name}</Text>
            <Text style={styles.txt1}>Type: {p.type}</Text>
            <Text style={styles.txt1}>Breed: {p.breed}</Text>
            <Text style={styles.txt1}>Color: {p.color}</Text>
            <Text style={styles.txt1}>Age: {p.age}</Text>
          </View>
        ))}
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  vscroll: {
    flex: 1,
    backgroundColor: "violet",
  },
  inputbox: {
    height: 60,
    width: '80%',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: 'white',
    margin: 20,
    fontFamily: "medium",
    padding: 15,
  },
  btn: {
    height: 60,
    width: 100,
    backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  itxt: {
    fontSize: 18,
    color: 'white',
    fontFamily: "bold",
  },
  petcard: {
    height: 350,
    width: '60%',
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 5,
    margin: 10,
    marginBottom:15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:2,
  },
  txt1: {
    fontSize: 14,
    color: 'black',
    fontFamily: "light",
  },
  img:{
    height:170,
    width:170,
    resizeMode:"cover",
    elevation:6,
    borderRadius:40,
    margin:15,
    zIndex:1,
  },

});
