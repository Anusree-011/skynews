// import { View, Text } from 'react-native'
// import React from 'react'
// import SearchBar from "../components/SearchBar"
// import NewsItem from "../components/NewsItem"


// export default function app() {
//   return (
//     <View>
//       <Text>
//         <SearchBar/>
//         <NewsItem/>
//       </Text>
//     </View>
//   )
// }
import React, { useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import SearchBar from "./SearchBar"
import NewsList from "./NewsList";
import WeatherCard from "./WeatherCard"

export default function App() {
  const [query, setQuery] = useState("");

  // ✔ Dummy sample weather data (UI only)
  const sampleWeather = {
    city: "New Delhi",
    temp: 28,
    description: "Clear Sky",
  };

  // ✔ Dummy sample news data (UI only)
  const sampleArticles = [
    {
      id: 1,
      title: "Sample News Title One",
      description:
        "This is a sample description. This is only for UI preview, no API.",
      image: "https://picsum.photos/200/140",
      url: "#",
    },
    {
      id: 2,
      title: "Sample News Title Two",
      description:
        "Another sample description for your UI mock design. No API used here.",
      image: "https://picsum.photos/200/141",
      url: "#",
    },
    {
      id: 3,
      title: "Sample News Title Three",
      description:
        "More dummy news to make the UI look like a real news app.",
      image: "https://picsum.photos/200/142",
      url: "#",
    },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
         <SearchBar value={query} onChangeText={setQuery} />
        <WeatherCard weather={sampleWeather} />
       
        <NewsList articles={sampleArticles} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
