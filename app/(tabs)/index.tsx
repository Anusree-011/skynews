import React, { useState, useEffect } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from '../../src/components/SearchBar';
import NewsList from '../../src/components/NewsList';
import LoadingSkeleton from '../../src/components/LoadingSkeleton';
import { getCurrentLocation } from '../../src/components/services/locationService';
import { fetchRegionalNews } from '../../src/components/services/newsService';

export default function HomeTab() {
  const [articles, setArticles] = useState<{id: number; title: string; description: string; urlToImage: string; url: string}[]>([]);
  const [originalArticles, setOriginalArticles] = useState<{id: number; title: string; description: string; urlToImage: string; url: string}[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    const loadRegionalNews = async () => {
      try {
        const location = await getCurrentLocation();
        const newsData = await fetchRegionalNews(location.country.toLowerCase());
        setArticles(newsData);
        setOriginalArticles(newsData);
      } catch (error) {
        console.error('Failed to load regional news:', error);
        // Fallback to sample data
        
      } finally {
        setLoading(false);
      }
    };
    
    loadRegionalNews();
  }, []);

  const handleSearchResults = (searchResults: any[]) => {
    if (searchResults.length > 0) {
      setArticles(searchResults);
    } else {
      setArticles(originalArticles);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <View style={styles.header}>
       
        <Text style={styles.headerTitle}>Sky News</Text>
           <SearchBar onSearchResults={handleSearchResults} onLoadingChange={setSearchLoading} />
      </View>
    
    
      {loading || searchLoading ? <LoadingSkeleton /> : <NewsList articles={articles} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
header: {
  paddingTop: 18,
  alignItems: 'center',
},
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontFamily: 'sans-serif',
  },
})