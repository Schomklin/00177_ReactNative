import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Counter from './components/Counter'
import MyInput from './components/MyInput'
import IncrementCounter from './components/IncrementCounter'
import Form from './components/Form'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Counter/> */}
      {/* <MyInput/> */}
      {/* <IncrementCounter/> */}
      <Form/>
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