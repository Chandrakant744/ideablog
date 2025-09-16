import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './src/screens/LandingScreen';
import DetailScreen from './src/screens/DetailScreen';
import { ListItem } from './src/types';

export type RootStackParamList = {
  Landing: undefined;
  Detail: { item: ListItem };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{ title: 'Products' }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Item Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;