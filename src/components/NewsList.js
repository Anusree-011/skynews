// src/components/NewsList.js
import React, { useState } from "react";
import { FlatList, View, Text, StyleSheet, RefreshControl } from "react-native";
import NewsItem from "../components/NewsItem"
import LoadingSkeleton from "./LoadingSkeleton";

export default function NewsList({ articles, onRefresh, onLoadMore }) {
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await onRefresh();
    setRefreshing(false);
  };

  const handleLoadMore = async () => {
    if (loadingMore) return;
    setLoadingMore(true);
    await onLoadMore();
    setLoadingMore(false);
  };

  const renderFooter = () => {
    if (!loadingMore) return null;
    return <LoadingSkeleton />;
  };

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
      keyExtractor={(item, index) => `${item.id}-${index}`}
      renderItem={({ item }) => <NewsItem article={item} />}
      contentContainerStyle={{ paddingBottom: 20 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={renderFooter}
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
