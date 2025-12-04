// src/components/NewsList.js
import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import NewsItem from "../components/NewsItem"

export default function NewsList({ articles }) {
  if (!articles || articles.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No news found</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={articles}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <NewsItem article={item} />}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    padding: 20,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#666",

  },
});
