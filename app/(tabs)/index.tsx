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
  const [currentPage, setCurrentPage] = useState(1);
  const [country, setCountry] = useState('in');

  useEffect(() => {
    const loadRegionalNews = async () => {
      try {
        const location = await getCurrentLocation();
        const countryCode = location.country.toLowerCase();
        setCountry(countryCode);
        const newsData = await fetchRegionalNews(countryCode, 1);
        setArticles(newsData);
        setOriginalArticles(newsData);
        setCurrentPage(1);
      } catch (error) {
        console.error('Failed to load regional news:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadRegionalNews();
  }, []);

  const handleRefresh = async () => {
    try {
      const newsData = await fetchRegionalNews(country, 1);
      setArticles(newsData);
      setOriginalArticles(newsData);
      setCurrentPage(1);
    } catch (error) {
      console.error('Failed to refresh news:', error);
    }
  };

  const handleLoadMore = async () => {
    try {
      const nextPage = currentPage + 1;
      const moreNews = await fetchRegionalNews(country, nextPage);
      setArticles(prev => [...prev, ...moreNews]);
      setOriginalArticles(prev => [...prev, ...moreNews]);
      setCurrentPage(nextPage);
    } catch (error) {
      console.error('Failed to load more news:', error);
    }
  };

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
    
    
      {loading || searchLoading ? <LoadingSkeleton /> : <NewsList articles={articles} onRefresh={handleRefresh} onLoadMore={handleLoadMore} />}
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