import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, Platform } from 'react-native';
import Scrollable from '../components/Scrollable';

const MenuScreen = ({ navigation }) => {
  const dishes = [
    {
      id: 1,
      name: 'cejas hindu',
      price: '50.000',
      image: require('../assets/hindu.jpg'),
      screen: 'hindu-makeup',
      description: 'depilacion cejas tradicional hindú personalizado'
    },
    {
      id: 2,
      name: 'ritual de belleza',
      price: '250.000',
      image: require('../assets//maquillaje.jpeg'),
      screen: 'ritual-de-belleza',
      description: 'Ritual de belleza personalizado'
    },
    {
      id: 3,
      name: 'peluqueria',
      price: '80.000',
      image: require('../assets/peluqqueria.jpeg'),
      screen: 'hair-styling',
      description: 'Plato típico antioqueño con frijoles, arroz, carne y más'
    }
  ];

  const renderDish = (dish) => (
    <TouchableOpacity
      key={dish.id}
      style={styles.dishCard}
      onPress={() => navigation.navigate(dish.screen)}
    >
      <Image source={dish.image} style={styles.dishImage} resizeMode="cover" />
      <View style={styles.dishInfo}>
        <Text style={styles.dishName}>{dish.name}</Text>
        <Text style={styles.dishDescription}>{dish.description}</Text>
        <Text style={styles.dishPrice}>${dish.price} COP</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Scrollable
        style={styles.scrollArea}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.header}>
          <Text style={styles.title}>¡Bienvenido a salonix!</Text>
          <Text style={styles.subtitle}>Deléitate con nuestros servicios de belleza</Text>
        </View>
        
        <View style={styles.menuContainer}>
          {dishes.map(renderDish)}
        </View>
      </Scrollable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollArea: {
    flex: 1,
    width: '100%',
    ...(Platform.OS === 'web' ? { height: '100%', maxHeight: '100vh' } : {}),
  },
  contentContainer: {
    paddingBottom: 32,
    ...(Platform.OS === 'web' ? { flexGrow: 1 } : {}),
  },
  header: {
    backgroundColor: '#7e22ce',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#f0f0f0',
    textAlign: 'center',
  },
  menuContainer: {
    padding: 16,
  },
  dishCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    ...(Platform.OS === 'web'
      ? { boxShadow: '0 2px 6px rgba(0,0,0,0.15)' }
      : {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 3.84,
          elevation: 5,
        }),
    overflow: 'hidden',
  },
  dishImage: {
    width: '100%',
    height: 200,
  },
  dishInfo: {
    padding: 16,
  },
  dishName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  dishDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    lineHeight: 20,
  },
  dishPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#a855f7',
  },
});

export default MenuScreen;
