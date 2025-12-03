import React from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WeatherCard from '../../src/components/WeatherCard';

export default function WeatherTab() {
  const sampleWeather = {
    city: "New Delhi",
    temp: 28,
    description: "Clear Sky",
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Weather</Text>
      </View>
      <WeatherCard weather={sampleWeather} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
})