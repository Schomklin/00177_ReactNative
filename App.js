import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import FlastListAPI from './components/FlastListAPI'
import News from './components/News'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <FlastListAPI/> */}
      <News/>
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