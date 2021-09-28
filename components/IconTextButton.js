import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const IconTextButton = ({ label, icon, containerStyle, onPress }) => {
  let [fontsLoaded, error] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 35,
          height: 35,
        }}
      />
      <Text
        style={{
          marginLeft: SIZES.base,
          ...FONTS.h3,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default IconTextButton;
