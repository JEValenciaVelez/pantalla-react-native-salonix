import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import MenuScreen from './screens/MenuScreen';
import BeautyRitualScreen from './screens/BeautyRitualScreen';
import HairStylingScreen from './screens/HairStylingScreen';
import HinduMakeupScreen from './screens/HinduMakeupScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator 
        initialRouteName="Menu"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#7e22ce',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Menu" 
          component={MenuScreen} 
          options={{ title: 'Servicios del Salón' }}
        />
        <Stack.Screen 
          name="ritual-de-belleza" 
          component={BeautyRitualScreen} 
          options={{ title: 'Ritual de Belleza' }}
        />
        <Stack.Screen 
          name="hair-styling" 
          component={HairStylingScreen} 
          options={{ title: 'Hair Styling' }}
        />
        <Stack.Screen 
          name="hindu-makeup" 
          component={HinduMakeupScreen} 
          options={{ title: 'Hindu Makeup' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
