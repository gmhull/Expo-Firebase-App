import { useContext, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { auth } from "../config/firebaseConfig";
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";
import { AuthenticatedUserContext } from "../providers/AuthenticatedUserProvider";

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  const { user, setUser } = useContext(AuthenticatedUserContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authenticatedUser) => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
    });

    return unsubscribe;
  });

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
