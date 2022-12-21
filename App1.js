<<<<<<< HEAD
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Information from "./components/Information";
import Welcome from "./components/Welcome";
import TxtInput from "./components/TxtInput";
import CustomComponent from "./components/CustomComponent";
import Logo from "./components/Logo";
import LotsOfGreeting from "./components/LotsOfGreeting";
import Count from "./components/Count";
import TextInput1 from "./components/TextInput1";
import AlertExample from "./components/AlertExample";
import ImageWithTextInput from "./components/ImageWithTextInput";
import ButtonExample from "./components/ButtonExample";
import Touchable_Example from "./components/Touchable_Example";

const App = () => {
  return (
    <View>
      {/* <Information /> */}
      {/* <Welcome/>       */}
      {/* <TxtInput/> */}
      {/* <CustomComponent/> */}
      {/* <Logo/> */}
      {/* <LotsOfGreeting/> */}
      {/* <Count num={2} title="Click"/> */}
      {/* <TextInput1/> */}
      {/* <AlertExample/> */}
      {/* <ImageWithTextInput/> */}
      {/* <ButtonExample/> */}
      <Touchable_Example/>

    </View>
  );
};

export default App;

/* const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  }
}) */

=======
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import User from './components/User'
import LotsOfGreetings from './components/LotsOfGreetings'
import MyCustomTextWith from './components/MyCustomTextWith'
import Count from './components/Count'
import InputText from './components/InputText'
import UserNamePassword from './components/UserNamePassword'
import AlertComponent from './components/AlertComponent'
import ImageWithTextInput from './components/ImageWithTextInput'
import ButtonExample from './components/ButtonExample'
import Touchable_Example from './components/Touchable_Example'
import DynamicStyle from './components/DynamicStyle'
import ModelExample from './components/ModelExample'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Logo /> */}
      {/* <User/> */}
      {/* <LotsOfGreetings/> */}
      {/* <MyCustomTextWith/> */}
       <Count num={2} title="Click"/>
      {/* <InputText/> */}
      {/* <UserNamePassword/> */}
      {/* <AlertComponent/> */}
      {/* <ImageWithTextInput/> */}
      {/* <ButtonExample/> */}
      {/* <Touchable_Example/> */}
      {/* <DynamicStyle/> */}
      {/* <ModelExample/> */}
    </View>
  )
}
export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }  
})
>>>>>>> 7bf3e57 (Commit Date[21-12-2022])
