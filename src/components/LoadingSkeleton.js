import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

export default function LoadingSkeleton() {
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    );
    animation.start();
    return () => animation.stop();
  }, []);

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 0.7],
  });

  return (
    <View style={styles.container}>
      {[1, 2, 3].map((item) => (
        <View key={item} style={styles.skeletonItem}>
          <Animated.View style={[styles.skeletonImage, { opacity }]} />
          <View style={styles.skeletonText}>
            <Animated.View style={[styles.skeletonTitle, { opacity }]} />
            <Animated.View style={[styles.skeletonDescription, { opacity }]} />
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  skeletonItem: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 6,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 2,
  },
  skeletonImage: {
    width: 120,
    height: 90,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  skeletonText: {
    flex: 1,
    paddingLeft: 12,
    justifyContent: 'center',
  },
  skeletonTitle: {
    height: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 8,
    width: '80%',
  },
  skeletonDescription: {
    height: 12,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    width: '60%',
  },
});