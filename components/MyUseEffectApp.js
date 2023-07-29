import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyUseEffectApp = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
      // Update the current time every second
      const interval = setInterval(() => {
        const time = new Date().toLocaleTimeString();
        setCurrentTime(time);
      }, 1000);
  
      // Clean up the interval when the component unmounts
      return () => clearInterval(interval);
    }, []); // The empty dependency array ensures this effect runs only once when the component mounts
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Current Time:</Text>
        <Text style={styles.time}>{currentTime}</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',     
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    time: {
      fontSize: 18,
    },
  });
export default MyUseEffectApp