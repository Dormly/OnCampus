export default () => ({
    expo: {
      name: "oncampus",
      slug: "oncampus",
      version: "1.0.0",
      orientation: "portrait",
      icon: "./assets/images/icon.png",
      scheme: "myapp",
      userInterfaceStyle: "automatic",
      newArchEnabled: true,
      ios: {
        config: {
          // API KEY HERE
          googleMapsApiKey: process.env.GOOGLEMAPS_API_KEY,
        },
        supportsTablet: true,
        bundleIdentifier: "com.anonymous.oncampus",
      },
      android: {
        config: {
          googleMaps: {
            // API KEY HERE
            apiKey: process.env.GOOGLEMAPS_API_KEY,
          },
        },
        adaptiveIcon: {
          foregroundImage: "./assets/images/adaptive-icon.png",
          backgroundColor: "#ffffff",
        },
        package: "com.anonymous.oncampus",
      },
      web: {
        bundler: "metro",
        output: "static",
        favicon: "./assets/images/favicon.png",
      },
      plugins: [
        "expo-router",
        [
          "expo-splash-screen",
          {
            image: "./assets/images/splash-icon.png",
            imageWidth: 200,
            resizeMode: "contain",
            backgroundColor: "#ffffff",
          },
        ],
      ],
      experiments: {
        typedRoutes: true,
      },
    },
  });
  