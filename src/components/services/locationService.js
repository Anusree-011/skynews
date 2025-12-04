import * as Location from 'expo-location';

export const getCurrentLocation = async () => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    
    if (status !== 'granted') {
      console.log('Location permission denied, defaulting to India');
      return { lat: 28.6139, lon: 77.2090, country: 'IN' }; // New Delhi, India
    }

    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    
    // Get country from coordinates
    const reverseGeocode = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });
    
    const country = reverseGeocode[0]?.isoCountryCode || 'IN';
    
    return {
      lat: latitude,
      lon: longitude,
      country: country
    };
  } catch (error) {
    console.error('Location detection failed:', error);
    return { lat: 28.6139, lon: 77.2090, country: 'IN' }; // Default to India
  }
};