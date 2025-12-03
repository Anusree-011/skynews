import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <View style={styles.card}>
      <Text style={styles.temp}>{weather.temp}°C</Text>
      <Text style={styles.condition}>{weather.description}</Text>
      <Text style={styles.city}>{weather.city}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#4a90e2",
    margin: 12,
    padding: 16,
    borderRadius: 12,
    elevation: 3,
    alignItems: "center",
  },
  temp: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  condition: {
    color: "#fff",
    fontSize: 18,
    marginTop: 6,
  },
  city: {
    marginTop: 8,
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
});
