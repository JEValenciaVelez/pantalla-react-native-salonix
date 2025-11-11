import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const HinduMakeupScreen = ({ navigation }) => {
  const benefits = [
    'depilacion cejas tradicional hindú personalizado',
    'Aplicación de henna en manos',
    'Colocación de bindi y accesorios',
    'Ritual de limpieza facial previo',
    'Consulta de estilo personalizada',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image source={require('../assets/hindu.jpg')} style={styles.serviceImage} resizeMode="cover" />

        <View style={styles.content}>
          <Text style={styles.title}>Epilacion Hindú</Text>
          <Text style={styles.price}>$ 50.000</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Descripción</Text>
            <Text style={styles.description}>
              Experimenta la tradición de eplicion de cejas hindú, ideal para
              definir tu mirada por mas tiempo.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Incluye</Text>
            {benefits.map((b, i) => (
              <Text key={i} style={styles.listItem}>• {b}</Text>
            ))}
          </View>

          <TouchableOpacity style={styles.bookButton} onPress={() => {}}>
            <Text style={styles.bookButtonText}>Reservar Cita</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#faf5ff' },
  scrollView: { flex: 1 },
  serviceImage: { width: '100%', height: 260 },
  content: {
    margin: 16,
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e9d5ff',
    boxShadow: '0 4px 10px rgba(168, 85, 247, 0.12)',
    elevation: 3,
  },
  title: { fontSize: 26, fontWeight: '700', color: '#6b21a8', textAlign: 'center', marginBottom: 8 },
  price: {
    fontSize: 20,
    fontWeight: '600',
    color: '#d946ef',
    textAlign: 'center',
    backgroundColor: '#fdf4ff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 12,
  },
  section: { marginBottom: 16, backgroundColor: 'rgba(255,255,255,0.85)', padding: 12, borderRadius: 10 },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#7e22ce', marginBottom: 8 },
  description: { color: '#6b7280', lineHeight: 20 },
  listItem: { color: '#6b7280', marginBottom: 6 },
  bookButton: {
    marginTop: 8,
    backgroundColor: '#a855f7',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  bookButtonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});

export default HinduMakeupScreen;
