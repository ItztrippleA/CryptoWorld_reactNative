import React from "react";
import { View, Text } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const Market = () => {
  let [fontsLoaded, error] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
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
  );
};

export default Market;
