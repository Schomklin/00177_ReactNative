<<<<<<< HEAD
import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

const Count = ({num,title }) => {

  //const { num, title } = props;
  const [count, setCount] = useState(num);

  /*   useEffect(()=>{
    console.log('use effect1');
  }); */

  /*  useEffect(()=>{
    console.log('use effect2');
  },[count]);

  useEffect(()=>{
    console.log('use effect3');
  },[]); */

  return (
    <View>
      <Text>
        {title} : {count}
      </Text>
      <Button title="Click Me" onPress={() => setCount(count + 1)} />
=======
import { View, Text, Button } from 'react-native'
import React, { useState, useEffect } from 'react'

const Count = (props) => {

  const [count, setCount] = useState(props.num);
  

  useEffect(() => {
    console.log('use effectf 1');
  })

  useEffect(() => {
    console.log('use effectf 2');
  }, [count])

  useEffect(() => {
    console.log('use effectf 3');
  }, [])

  return (
    <View>
      <Text>{props.title} : {count}</Text>
      <Button
        title='Click Me 1'
        onPress={() => setCount(count + 1)}
      />

>>>>>>> 7bf3e57 (Commit Date[21-12-2022])
    </View>
  );
};

export default Count;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
