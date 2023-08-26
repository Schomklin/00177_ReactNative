import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import UseEffectFlatList from './components/UseEffectFlatList';
import RandomUsersScreen from './components/RandomUsersScreen';
import FlastList_Example from './components/FlatList_Example';
import FlatList_HeaderFooter from './components/FlatList_HeaderFooter';




const App = () => {
  return (
    <View style={styles.container}>
     {/* <UseEffectFlatList/>    */}
     {/* <RandomUsersScreen/> */}
     {/* <FlastList_Example/> */}
     <FlatList_HeaderFooter/>
    
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
