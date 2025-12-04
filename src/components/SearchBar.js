import { View, Text } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';
import { searchNews } from './services/newsService';

export default function SearchBar({ onSearchResults, onLoadingChange }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const timeoutRef = React.useRef(null);
  
  const handleSearch = async (query) => {
    if (query.trim()) {
      try {
        onLoadingChange(true);
        const results = await searchNews(query);
        onSearchResults(results);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        onLoadingChange(false);
      }
    } else {
      onSearchResults([]);
      onLoadingChange(false);
    }
  };
  
  const handleTextChange = (text) => {
    setSearchQuery(text);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    if (text.trim() === '') {
      onSearchResults([]);
    } else {
      timeoutRef.current = setTimeout(() => {
        handleSearch(text);
      }, 500);
    }
  };
  
  return (
    <View style={{ marginTop: 10,marginBottom: 10, padding: 3 ,width:"100%" ,}}>
      <Searchbar
        placeholder="Search news..."
        onChangeText={handleTextChange}
        value={searchQuery}
        onSubmitEditing={() => handleSearch(searchQuery)}
        onIconPress={() => handleSearch(searchQuery)}
        style={{
         backgroundColor: "#E6F0FF", 
          borderRadius: 12,
        }}
        inputStyle={{ fontSize: 16 }}
        iconColor="#666"
      />
    </View>
  )
}