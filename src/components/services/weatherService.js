export const fetchWeather = async (lat, lon) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dbbc949bddd59d7f7411c4868538b7d9`);
    const data = await response.json();
    
    return {
      city: data.name,
      country: data.sys.country,
      temp: Math.round(data.main.temp - 273.15), // Convert Kelvin to Celsius
      condition: data.weather[0].main,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    };
  } catch (error) {
    console.error('Weather API error:', error);
    throw error;
  }
};