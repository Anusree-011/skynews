import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { fetchWeather } from './services/weatherService';
import { getCurrentLocation } from './services/locationService';

export default function WeatherCard() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWeather = async () => {
      try {
        const location = await getCurrentLocation();
        const weatherData = await fetchWeather(location.lat, location.lon);
        setWeather(weatherData);
      } catch (error) {
        console.error('WeatherCard error:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadWeather();
  }, []);

  if (loading) return (
    <View style={styles.card}>
      <Text style={styles.temp}>Loading...</Text>
    </View>
  );
  
  if (!weather) return null;
  

  return (
    <View style={styles.card}>
      <View style={styles.locationRow}>
        <Text style={styles.city}>{weather.city}, {weather.country}</Text>
      </View>
      <View style={styles.weatherRow}>
        <Text style={styles.temp}>{weather.temp}°C</Text>
        <Text style={styles.icon}>☁️</Text>
      </View>
      <Text style={styles.condition}>{weather.condition}</Text>
      <Text style={styles.description}>{weather.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#4a90e2",
    margin: 12,
    padding: 20,
    borderRadius: 16,
    elevation: 4,
    alignItems: "center",
  },
  locationRow: {
    marginBottom: 12,
  },
  city: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Times New Roman",
  },
  weatherRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  temp: {
    color: "#fff",
    fontSize: 48,
    fontWeight: "bold",
    marginRight: 12,
    fontFamily: "Times New Roman",
  },
  icon: {
    fontSize: 40,
  },
  condition: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 4,
    fontFamily: "Times New Roman",
  },
  description: {
    color: "#e6f3ff",
    fontSize: 16,
    textTransform: "capitalize",
    fontFamily: "Times New Roman",
  },
});
