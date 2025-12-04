
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from "react-native";

export default function NewsItem({ article }) {
  const openArticle = () => {
    if (article.url) {
      Linking.openURL(article.url);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={openArticle}>
      {article.urlToImage ? (
        <Image source={{ uri: article.urlToImage }} style={styles.image} />
      ) : (
        <View style={styles.placeholder} />
      )}

      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {article.title}
        </Text>

        <Text style={styles.description} numberOfLines={3}>
          {article.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 6,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 2,
  },

  image: {
    width: 120,
    height: 90,
    borderRadius: 8,
  },

  placeholder: {
    width: 120,
    height: 90,
    backgroundColor: "#ddd",
    borderRadius: 8,
  },

  textContainer: {
    flex: 1,
    paddingLeft: 12,
    justifyContent: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 6,

  },

  description: {
    fontSize: 14,
    color: "#555",

  },
});
