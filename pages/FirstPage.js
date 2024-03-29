import * as React from 'react';
import { Button,  View,  Text,  SafeAreaView} from 'react-native';

const FirstPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View style={{ flex:1, alignItems:'center',justifyContent:'center'}}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            This is the First Page under First Page Option
          </Text>
          <Button
            onPress={
              () => navigation.navigate('SecondPage')
            }
            title="Go to Second Page"            
          />
          <Button
            onPress={
              () => navigation.navigate('ThirdPage')
            }
            title="Go to Third Page"            
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          React Navigate Drawer 
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          Create by: YourName
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default FirstPage; 
