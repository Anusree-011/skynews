import { View, Text } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';

export default function SearchBar() {
   const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <View style={{ marginTop: 10,marginBottom: 10, padding: 3 ,width:"100%" ,}}>
      <Searchbar
        placeholder="Search news..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={{
          borderRadius: 12,
        }}
        inputStyle={{ fontSize: 16 }}
        iconColor="#666"
      />
    </View>
  )
}