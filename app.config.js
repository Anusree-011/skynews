export default ({ config }) => ({
  ...config,
  name: "SkyNews",
  slug: "sky-news",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icons.png",
  scheme: "skynews",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.skynews.app"
  },
  android: {
    package: "com.skynews.app",
    adaptiveIcon: {
      backgroundColor: "#E6F4FE",
      foregroundImage: "./assets/images/android-icon-foreground.png",
      backgroundImage: "./assets/images/android-icon-background.png",
      monochromeImage: "./assets/images/android-icon-monochrome.png"
    },
    edgeToEdgeEnabled: true,
    predictiveBackGestureEnabled: false
  },
  web: {
    output: "static",
    favicon: "./assets/images/icons.png"
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/icons.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#D1E9FE"
      }
    ]
  ],
  experiments: {
    typedRoutes: true,
    reactCompiler: true
  },
  extra: {
    newsApiKey: process.env.EXPO_PUBLIC_NEWS_API_KEY,
    weatherApiKey: process.env.EXPO_PUBLIC_WEATHER_API_KEY,
    eas: {
      projectId: "a683cbf4-76a7-48c4-86a0-ef1cccc8f7b8"
    }
  },
});