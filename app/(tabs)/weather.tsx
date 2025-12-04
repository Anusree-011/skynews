import React from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DetailedWeatherCard from '../../src/components/DetailedWeatherCard';

export default function WeatherTab() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f0f8ff' }}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Weather Details</Text>
      </View>
      <DetailedWeatherCard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4a90e2',
    paddingVertical: 20,
    alignItems: 'center',
    elevation: 4,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
})