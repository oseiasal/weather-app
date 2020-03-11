import 'react-native-gesture-handler';
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainActivity from './components/MainActivity'
import ConfigActivity from './components/ConfigActivity'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={MainActivity}  options={{headerStyle: {
        backgroundColor: '#5599ff'
      }}}/>
      <Stack.Screen name="Config" component={ConfigActivity} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App