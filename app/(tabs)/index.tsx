import React from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from '../../src/components/SearchBar';
import NewsList from '../../src/components/NewsList';

export default function HomeTab() {
  const sampleWeather = {
    city: "New Delhi",
    temp: 28,
    description: "Clear Sky",
  };

  const sampleArticles = [
    {
      id: 1,
      title: "Sample News Title One",
      description: "This is a sample description. This is only for UI preview, no API.",
      urlToImage: "https://picsum.photos/200/140",
    },
    {
      id: 2,
      title: "Sample News Title Two", 
      description: "Another sample description for your UI mock design. No API used here.",
      urlToImage: "https://picsum.photos/200/141",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <View style={styles.header}>
          <SearchBar />
        <Text style={styles.headerTitle}>SkyNews</Text>
      </View>
      {/* <WeatherCard weather={sampleWeather} /> */}
    
      <NewsList articles={sampleArticles} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  header: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
   
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
})