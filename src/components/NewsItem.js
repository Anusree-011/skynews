// // src/components/NewsItem.js
// import React from "react";
// import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
// import * as Linking from "expo-linking";

// export default function NewsItem({ article }) {
//   const openArticle = () => {
//     if (article.url) {
//       Linking.openURL(article.url);
//     }
//   };

//   return (
//     <TouchableOpacity style={styles.container} onPress={openArticle}>
//       {article.image ? (
//         <Image source={{ uri: article.image }} style={styles.image} />
//       ) : (
//         <View style={styles.placeholder} />
//       )}

//       <View style={styles.textContainer}>
//         <Text style={styles.title} numberOfLines={2}>
//           {article.title}
//         </Text>

//         <Text style={styles.description} numberOfLines={3}>
//           {article.description}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     padding: 10,
//     backgroundColor: "#fff",
//     marginVertical: 6,
//     marginHorizontal: 10,
//     borderRadius: 8,
//     width: "90%",
//     height: 200,
//   },
//   image: {
//     width: 90,
//     height: 70,
//     borderRadius: 8,
    
//   },
//   placeholder: {
//     width: 90,
//     height: 70,
//     backgroundColor: "#ddd",
//     borderRadius: 8,
//   },
//   textContainer: {
//     flex: 1,
//     paddingLeft: 10,
//     justifyContent: "center",
//   },
//   title: {
//     fontWeight: "bold",
//     fontSize: 15,
//     marginBottom: 4,
//   },
//   description: {
//     fontSize: 13,
//     color: "#555",
//   },
// });

import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { router } from 'expo-router';

export default function NewsItem({ article }) {
  const handlePress = () => {
    router.push({
      pathname: '/news-detail',
      params: {
        title: article?.title || 'Sample News Title',
        description: article?.description || 'Sample description',
        image: article?.urlToImage || article?.image || 'https://picsum.photos/400/200',
      },
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      {article.image ? (
        <Image source={{ uri: article.image }} style={styles.image} />
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
