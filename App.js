<<<<<<< HEAD
import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import HomePost from "./screens/HomePost";
import CreatePost from "./screens/CreatePost";


const Stack = createNativeStackNavigator();
=======
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import HomePost from './screens/HomePost';
import CreatePost from './screens/CreatePost';
>>>>>>> 7bf3e57 (Commit Date[21-12-2022])

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
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

=======
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#008b8b'
          },
          headerTintColor: '#ffff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


>>>>>>> 7bf3e57 (Commit Date[21-12-2022])
export default App;
