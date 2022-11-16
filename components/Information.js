import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Information = () => {
  return (
    <View style={styles.container}>
      <Text>React Native with Thai-Nichi</Text>
      <Text>By....Amonpan Chomklin</Text>
      <Text>Student Id: 1913132546</Text>
      <Text>Major: Information Technology</Text>
    </View>
  )
}

export default Information

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#add8e6",
      alignItems:"center",
      justifyContent:'center'
    }
  })