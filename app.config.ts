import { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "ceuns-bank-mobile",
  slug: "ceuns-bank-mobile",
  scheme: "ceuns-bank-mobile",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    favicon: "./assets/favicon.png",
    bundler: "metro",
  },
  plugins: ["expo-router"],
  extra: {
    eas: {
      projectId: "790c88e2-260f-4011-9fc6-a3228d09586a",
    },
  },
};

export default config;
