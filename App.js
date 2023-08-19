import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import UseEffectFlatList from './components/UseEffectFlatList';
import RandomUsersScreen from './components/RandomUsersScreen';




const App = () => {
  return (
    <View style={styles.container}>
     {/* <UseEffectFlatList/>    */}
     <RandomUsersScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
