import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { COLORS, FONTS } from "../constants/theme";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const TabIcon = ({ focused, icon, iconStyle, label, isTrade }) => {
  let [fontsLoaded, error] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  if (isTrade) {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: COLORS.black,
        }}
      >
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: COLORS.white,
            ...iconStyle,
          }}
        />

        <Text style={{ color: COLORS.white, ...FONTS.h4 }}>{label}</Text>
      </View>
    );
  } else {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: focused ? COLORS.white : COLORS.secondary,
            ...iconStyle,
          }}
        />
        <Text
          style={{
            color: focused ? COLORS.white : COLORS.secondary,
            ...FONTS.h4,
            fontFamily: "Roboto-Regular",
          }}
        >
          {label}
        </Text>
      </View>
    );
  }
};
export default TabIcon;
