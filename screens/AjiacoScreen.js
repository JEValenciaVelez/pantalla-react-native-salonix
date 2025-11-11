import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, Platform } from 'react-native';
import Scrollable from '../components/Scrollable';

const AjiacoScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Scrollable style={styles.scrollArea} contentContainerStyle={styles.contentContainer}>
        <Image source={require('../assets/ajiaco.png')} style={styles.dishImage} resizeMode="cover" />
        
        <View style={styles.content}>
          <Text style={styles.title}>Ajiaco Santafereño</Text>
          <Text style={styles.price}>$15.000 COP</Text>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Descripción</Text>
            <Text style={styles.description}>
              El ajiaco es una sopa tradicional de Bogotá, preparada con tres tipos de papa 
              (criolla, sabanera y pastusa), pollo desmechado, mazorca, guascas y alcaparras. 
              Se sirve con aguacate, crema de leche y arroz blanco. Es un plato reconfortante 
              perfecto para el clima frío de la capital.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ingredientes</Text>
            <Text style={styles.ingredients}>
              • Pollo desmechado{'\n'}
              • Papa criolla{'\n'}
              • Papa sabanera{'\n'}
              • Papa pastusa{'\n'}
              • Mazorca de maíz{'\n'}
              • Guascas{'\n'}
              • Alcaparras{'\n'}
              • Aguacate{'\n'}
              • Crema de leche{'\n'}
              • Arroz blanco
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Información Nutricional</Text>
            <Text style={styles.nutrition}>
              • Calorías: 450{'\n'}
              • Proteínas: 25g{'\n'}
              • Carbohidratos: 35g{'\n'}
              • Grasas: 20g
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Tiempo de Preparación</Text>
            <Text style={styles.time}>45-60 minutos</Text>
          </View>
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
  dishImage: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B4513',
    textAlign: 'center',
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    textAlign: 'justify',
  },
  ingredients: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  nutrition: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  time: {
    fontSize: 18,
    color: '#8B4513',
    fontWeight: 'bold',
  },
});

export default AjiacoScreen;
