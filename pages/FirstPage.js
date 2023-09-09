
import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';

const FirstPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          This is the First Page of the app
        </Text>
        <Button
          onPress={() => navigation.navigate('SecondPage')}
          title="Go to Second Page"
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

export default FirstPage;


