import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from './screens/HomeScreen';
import ISSLocationScreen from './screens/ISSLocationScreen';
import MeteorScreen from './screens/Meteor';

 const stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="ISSLocation" component={ISSLocationScreen} />
        <stack.Screen name="Meteors" component={MeteorScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
