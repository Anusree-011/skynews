import React from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DetailedWeatherCard from '../../src/components/DetailedWeatherCard';

export default function WeatherTab() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f0f8ff' }}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Weather Updates</Text>
      </View>
      <DetailedWeatherCard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  header: {

    alignItems: 'center',
    paddingTop: 18,
    paddingBottom: 8,
  },
 headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontFamily: 'sans-serif',
  },
});