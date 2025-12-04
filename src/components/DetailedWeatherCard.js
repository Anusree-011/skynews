import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { fetchWeather } from './services/weatherService';
import { getCurrentLocation } from './services/locationService';

export default function DetailedWeatherCard() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWeather = async () => {
      try {
        console.log('DetailedWeatherCard: Starting to load weather...');
        const location = await getCurrentLocation();
        console.log('DetailedWeatherCard: Got location:', location);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=dbbc949bddd59d7f7411c4868538b7d9`);
        const data = await response.json();
        console.log('DetailedWeatherCard: Got weather data:', data);
        
        setWeather({
          city: data.name,
          country: data.sys.country,
          temp: Math.round(data.main.temp - 273.15),
          feelsLike: Math.round(data.main.feels_like - 273.15),
          condition: data.weather[0].main,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          windSpeed: data.wind.speed,
          windDeg: data.wind.deg,
          visibility: data.visibility / 1000,
          clouds: data.clouds.all,
        });
        console.log('DetailedWeatherCard: Weather state set successfully');
      } catch (error) {
        console.error('Detailed weather error:', error);
      } finally {
        setLoading(false);
        console.log('DetailedWeatherCard: Loading finished');
      }
    };
    
    loadWeather();
  }, []);

  if (loading) return (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingText}>Loading weather details...</Text>
    </View>
  );
  
  if (!weather) return null;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainCard}>
        <Text style={styles.location}>{weather.city}, {weather.country}</Text>
        <Text style={styles.mainTemp}>{weather.temp}°C</Text>
        <Text style={styles.condition}>{weather.condition}</Text>
        <Text style={styles.description}>{weather.description}</Text>
        <Text style={styles.feelsLike}>Feels like {weather.feelsLike}°C</Text>
      </View>

      <View style={styles.detailsGrid}>
        <View style={styles.detailCard}>
          <Text style={styles.detailLabel}>Humidity</Text>
          <Text style={styles.detailValue}>{weather.humidity}%</Text>
        </View>
        
        <View style={styles.detailCard}>
          <Text style={styles.detailLabel}>Pressure</Text>
          <Text style={styles.detailValue}>{weather.pressure} hPa</Text>
        </View>
        
        <View style={styles.detailCard}>
          <Text style={styles.detailLabel}>Wind Speed</Text>
          <Text style={styles.detailValue}>{weather.windSpeed} m/s</Text>
        </View>
        
        <View style={styles.detailCard}>
          <Text style={styles.detailLabel}>Visibility</Text>
          <Text style={styles.detailValue}>{weather.visibility} km</Text>
        </View>
        
        <View style={styles.detailCard}>
          <Text style={styles.detailLabel}>Cloudiness</Text>
          <Text style={styles.detailValue}>{weather.clouds}%</Text>
        </View>
        
        <View style={styles.detailCard}>
          <Text style={styles.detailLabel}>Wind Direction</Text>
          <Text style={styles.detailValue}>{weather.windDeg}°</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#666',
  },
  mainCard: {
    backgroundColor: '#4a90e2',
    margin: 16,
    padding: 32,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 6,
  },
  location: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  mainTemp: {
    color: '#fff',
    fontSize: 72,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  condition: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    color: '#e6f3ff',
    fontSize: 18,
    textTransform: 'capitalize',
    marginBottom: 12,
  },
  feelsLike: {
    color: '#e6f3ff',
    fontSize: 16,
  },
  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    justifyContent: 'space-between',
  },
  detailCard: {
    backgroundColor: '#fff',
    width: '48%',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    elevation: 3,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    textAlign: 'center',
  },
  detailValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});