import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, Platform } from 'react-native';
import Scrollable from '../components/Scrollable';

const BandejaPaisaScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Scrollable style={styles.scrollArea} contentContainerStyle={styles.contentContainer}>
        <Image source={require('../assets/bandeja-paisa.png')} style={styles.dishImage} resizeMode="cover" />
        
        <View style={styles.content}>
          <Text style={styles.title}>Bandeja Paisa</Text>
          <Text style={styles.price}>$25.000 COP</Text>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Descripción</Text>
            <Text style={styles.description}>
              La bandeja paisa es el plato más representativo de la región antioqueña y 
              uno de los más famosos de Colombia. Es una comida abundante que incluye 
              frijoles rojos, arroz blanco, carne molida, chicharrón, chorizo, huevo frito, 
              aguacate, plátano maduro y arepa. Es un plato completo que representa la 
              generosidad de la cocina paisa.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ingredientes</Text>
            <Text style={styles.ingredients}>
              • Frijoles rojos{'\n'}
              • Arroz blanco{'\n'}
              • Carne molida{'\n'}
              • Chicharrón{'\n'}
              • Chorizo antioqueño{'\n'}
              • Huevo frito{'\n'}
              • Aguacate{'\n'}
              • Plátano maduro{'\n'}
              • Arepa{'\n'}
              • Hogao{'\n'}
              • Patacones
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Origen</Text>
            <Text style={styles.origin}>
              La bandeja paisa nació en la región de Antioquia como una comida de 
              trabajadores que necesitaban energía para las largas jornadas en el campo. 
              Con el tiempo se convirtió en el plato insignia de la cocina colombiana 
              y es considerado patrimonio cultural de la nación.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Información Nutricional</Text>
            <Text style={styles.nutrition}>
              • Calorías: 850{'\n'}
              • Proteínas: 45g{'\n'}
              • Carbohidratos: 80g{'\n'}
              • Grasas: 35g{'\n'}
              • Fibra: 15g
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Tiempo de Preparación</Text>
            <Text style={styles.time}>2-3 horas</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recomendación</Text>
            <Text style={styles.recommendation}>
              Este plato es ideal para compartir o para personas con buen apetito. 
              Se recomienda acompañarlo con una bebida refrescante como limonada 
              o jugo de naranja.
            </Text>
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
  origin: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    textAlign: 'justify',
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
  recommendation: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    textAlign: 'justify',
    fontStyle: 'italic',
  },
});

export default BandejaPaisaScreen;
