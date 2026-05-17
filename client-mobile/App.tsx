import { NavigationContainer }
  from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";

import AppNavigator
  from "./src/components/AppNavigator";
import { useAuthStore } from "./src/store/authStore";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const token = useAuthStore((state) => state.token);
  const isHydrated = useAuthStore((state) => state.isHydrated);
  const hydrateToken = useAuthStore((state) => state.hydrateToken);

  useEffect(() => {
    hydrateToken();
  }, []);

  useEffect(() => {
    if (isHydrated) {
      setIsReady(true);
    }
  }, [isHydrated]);

  if (!isReady) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#020617" }}>
        <ActivityIndicator size="large" color="#2DD4BF" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <AppNavigator token={token} />
    </NavigationContainer>
  );
}