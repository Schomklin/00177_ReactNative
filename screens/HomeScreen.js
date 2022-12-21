<<<<<<< HEAD
import { View, Text, Button } from "react-native";
import React from "react";
import {Ionicons,FontAwesome } from '@expo/vector-icons'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Ionicons name='home' size={40} color='#008b8b'/>
      <Text>Home Screen</Text>
      <Button
        title="เกี่ยวกับเรา"
        onPress={() => navigation.navigate("About",{
            email:'reactnative@tni.ac.th'
        })}
      />
    </View>
  );
};

export default HomeScreen;
=======
import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import {Ionicons}  from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Ionicons name='home' size={30} color='#008b8b'/>
            <Text>Home Screen</Text>
            <Button
                title='เกี่ยวกับเรา'
                onPress={() => navigation.navigate('About', {
                    email: 'reactnative.tni.ac.th'
                })}
            />
        </View>
    )
}

export default HomeScreen

>>>>>>> 7bf3e57 (Commit Date[21-12-2022])
