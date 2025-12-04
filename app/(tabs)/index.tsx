import React, { useState, useEffect } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from '../../src/components/SearchBar';
import NewsList from '../../src/components/NewsList';
import { getCurrentLocation } from '../../src/components/services/locationService';
import { fetchRegionalNews } from '../../src/components/services/newsService';

export default function HomeTab() {
  const [articles, setArticles] = useState<{id: number; title: string; description: string; urlToImage: string}[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRegionalNews = async () => {
      try {
        const location = await getCurrentLocation();
        const newsData = await fetchRegionalNews(location.country.toLowerCase());
        setArticles(newsData);
      } catch (error) {
        console.error('Failed to load regional news:', error);
        // Fallback to sample data
        
      } finally {
        setLoading(false);
      }
    };
    
    loadRegionalNews();
  }, []);

 
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <View style={styles.header}>
       
        <Text style={styles.headerTitle}>Sky News</Text>
           <SearchBar />
      </View>
    
    
      <NewsList articles={articles} />
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