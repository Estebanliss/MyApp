import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TextInput, View, Pressable, Alert } from 'react-native';
import { COLORS } from "./src/constans/Color";


export default function App() {

  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);


  return (
    <View style={styles.container}>
      <Text style={styles.titleApp}>WORK-IT</Text>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder='Escribe una tarea'
          value={textItem}
          onChange={(event) => console.log(event)}
        />
        <Pressable
          style={styles.button}
          onPress={() => Alert.alert('Simple Button pressed')}
        >
          <Text style={styles.textButton}>Guardar tarea</Text>
        </Pressable>
      </View>
      <View style={styles.listItem}>
        {list.map(item => (
          <View>
            <Text>{item.value}</Text>
          </View>
        ))}
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "F5F2F2",
    flexDirection: "column",
    justifyContent: 'flex-start',
  },

  titleApp: {
    flex: 1,
    height: 90,
    width: 350,
    textAlign: 'center',
    marginTop: 50,
    fontSize: 30,
    fontWeight: '800',
    color: "#49AAF3",
    backgroundColor: "#F5F5F550"
  },

  containerInput: {
    flex: 1,
    borderBottomColor: "#ccc",
    marginBottom: 300,
    paddingHorizontal: 2,
    paddingVertical: 4,
  },

  input: {
    borderRadius: 20,
    width: 350,
    height: 70,
    backgroundColor: "white",
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginBottom: 30,

  },

  button: {
    backgroundColor: "red",
    borderRadius: 20,
    justifyContent: "center",
    height: 70,
  },

  textButton:{
    textAlign: "center",
    color: "fff",
    fontSize: 25,
    fontWeight: 650,
  },

  listItem: {
    flex: 3,
  }

});
