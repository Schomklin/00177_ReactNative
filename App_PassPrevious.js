import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IndexScreen from './screens/IndexScreen';
import CreatePostScreen from './screens/CreatePostScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode='model'>
        <Stack.Screen name="Index" component={IndexScreen} options={{title:'MainPage'}} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
