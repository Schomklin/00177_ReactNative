import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';

const SecondPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          This is Second Page of the App
        </Text>
        <Button
          title="Go back"
          onPress={() => navigation.goBack()}
        />
        <Button
          title="Go to SecondPage... again"
          onPress={() => navigation.push('SecondPage')}
        />
        <Button
          title="Go to First Page"
          onPress={() => navigation.navigate('FirstPage')}
        />
        <Button
          title="Go to Third Page"
          onPress={() => navigation.navigate('ThirdPage')
          }
        />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 16
  },
});

export default SecondPage;
