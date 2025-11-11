import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, Platform } from 'react-native';
import Scrollable from '../components/Scrollable';

const ArepaChocoloScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Scrollable style={styles.scrollArea} contentContainerStyle={styles.contentContainer}>
        <Image source={require('../assets/arepa-chocolo.png')} style={styles.dishImage} resizeMode="cover" />
        
        <View style={styles.content}>
          <Text style={styles.title}>Arepa Chocolo</Text>
          <Text style={styles.price}>$10.000 COP</Text>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Descripción</Text>
            <Text style={styles.description}>
              La arepa chocolo es una delicia dulce hecha con maíz tierno (choclo), 
              queso fresco y un toque de azúcar. Es una arepa suave y dulce que se 
              puede disfrutar en el desayuno o como merienda. Su sabor único combina 
              la dulzura natural del maíz con la salinidad del queso.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ingredientes</Text>
            <Text style={styles.ingredients}>
              • Maíz tierno (choclo){'\n'}
              • Queso fresco{'\n'}
              • Azúcar{'\n'}
              • Mantequilla{'\n'}
              • Sal{'\n'}
              • Leche (opcional)
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preparación</Text>
            <Text style={styles.preparation}>
              1. Desgranar el maíz tierno{'\n'}
              2. Moler el maíz hasta obtener una masa suave{'\n'}
              3. Agregar queso desmenuzado, azúcar y sal{'\n'}
              4. Amasar hasta integrar todos los ingredientes{'\n'}
              5. Formar arepas delgadas{'\n'}
              6. Cocinar en plancha con mantequilla hasta dorar
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Información Nutricional</Text>
            <Text style={styles.nutrition}>
              • Calorías: 320{'\n'}
              • Proteínas: 12g{'\n'}
              • Carbohidratos: 45g{'\n'}
              • Grasas: 8g
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Tiempo de Preparación</Text>
            <Text style={styles.time}>30-40 minutos</Text>
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
  preparation: {
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

export default ArepaChocoloScreen;
