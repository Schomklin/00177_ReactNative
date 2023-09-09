
import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';

const ThirdPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          This is Third Page of the App
          {'\n'}
        </Text>
        <Button
          title="Go back"
          onPress={() => navigation.goBack()}
        />

        <Button
          onPress={() => navigation.navigate('SecondPage')}
          title="Go to Second Page"
        />
        <Button
          title="Reset navigator to First Page"
          onPress={() => navigation.navigate('FirstPage')}
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

export default ThirdPage;
