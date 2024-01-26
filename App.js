import React from "react";
import { AuthenticatedUserProvider } from "./providers";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootNavigator } from "./navigation/RootNav";

export default function App() {
  return (
    <AuthenticatedUserProvider>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </AuthenticatedUserProvider>
  );
}
