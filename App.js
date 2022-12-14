import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import HomePost from "./screens/HomePost";
import CreatePost from "./screens/CreatePost";


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
       initialRouteName="Home"
       screenOptions={{
        headerStyle:{
          backgroundColor :'#66cdaa'
        },
        headerTintColor:'#ffff',
        headerTitleStyle:{
          fontWeight:'bold'
        }
       }}
      >
{/*     <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} /> */}
        <Stack.Screen name="HomePost" component={HomePost} />
        <Stack.Screen name="CreatPost" component={CreatePost} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
