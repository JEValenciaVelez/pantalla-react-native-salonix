import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import MenuScreen from './screens/MenuScreen';
import AjiacoScreen from './screens/AjiacoScreen';
import ArepaChocoloScreen from './screens/ArepaChocoloScreen';
import BandejaPaisaScreen from './screens/BandejaPaisaScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator 
        initialRouteName="Menu"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#8B4513',
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
          options={{ title: 'Menú del Restaurante' }}
        />
        <Stack.Screen 
          name="Ajiaco" 
          component={AjiacoScreen} 
          options={{ title: 'Ajiaco' }}
        />
        <Stack.Screen 
          name="ArepaChocolo" 
          component={ArepaChocoloScreen} 
          options={{ title: 'Arepa Chocolo' }}
        />
        <Stack.Screen 
          name="BandejaPaisa" 
          component={BandejaPaisaScreen} 
          options={{ title: 'Bandeja Paisa' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
