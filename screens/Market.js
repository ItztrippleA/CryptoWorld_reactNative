import React from "react";
import { View, Text } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { MainLayout } from "./";

const Market = () => {
  let [fontsLoaded, error] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <MainLayout>
      <View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            fontFamily: "Roboto-Regular",
          }}
        >
          Marketcdsvfdbgnhjh,kgjhfdsafghjkgfdsadfghjkgfdsadfgghjgfdsadfjhg
        </Text>
      </View>
    </MainLayout>
  );
};

export default Market;
