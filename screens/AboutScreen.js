<<<<<<< HEAD
import { View, Text } from "react-native";
import React from "react";

const AboutScreen = ({ route }) => {
  const { email } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>About Screen</Text>
      <Text>Email : {email} </Text>
    </View>
  );
};

export default AboutScreen;
=======
import { View, Text } from 'react-native'
import React from 'react'

const AboutScreen = ({route}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>AboutScreen</Text>
      <Text>Email : {route.params.email} </Text>
    </View>
  )
}

export default AboutScreen
>>>>>>> 7bf3e57 (Commit Date[21-12-2022])
