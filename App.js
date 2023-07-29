import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Form from './components/Form'
import TouchableHighlightExample from './components/TouchableHighlightExample'
import Example_useEffect from './components/Example_useEffect'
import MyUseEffectApp from './components/MyUseEffectApp'
import UseEffectFlatList from './components/UseEffectFlatList'


const App = () => {
  return (
    <View style={styles.container}>
      {/* <Form/> */}
      {/* <TouchableHighlightExample/>     */}
      {/* <Example_useEffect/> */}
      {/* <MyUseEffectApp/> */}
      <UseEffectFlatList/>
     
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