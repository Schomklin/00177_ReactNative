import * as React from 'react';
import {Button,  View,  Text,  SafeAreaView} from 'react-native';

const SecondPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            This is Second Page under Second Page Option
          </Text>
          <Button
            title="Go to First Page"
            onPress={
              () => navigation.navigate('FirstPage')
            }
          />
          <Button
            title="Go to Third Page"
            style = {{padding:20}}
            onPress={
              () => navigation.navigate('ThirdPage')
            }
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
export default SecondPage;
