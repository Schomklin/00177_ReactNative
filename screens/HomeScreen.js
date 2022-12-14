import { View, Text, Button } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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
