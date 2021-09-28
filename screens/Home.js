import React from "react";
import { View, Text, Image } from "react-native";
const briefcase = require("../assets/icons/briefcase.png");

const Home = () => {
  return (
    <View>
      <Text>
        <Image source={briefcase} />
      </Text>
    </View>
  );
};

export default Home;
