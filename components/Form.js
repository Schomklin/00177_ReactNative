import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    Button
} from 'react-native'
import React, {useState} from 'react'

const Form = () => {

    const [name,setName] = useState('Taylor')
    const [age,setAge] = useState(42);

  return (
    <View>
      <Text>Form</Text>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:25
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15
    }
})