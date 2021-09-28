import React from "react";
import { View, Text, Image } from "react-native";
import { MainLayout } from "./";
const briefcase = require("../assets/icons/briefcase.png");

const Home = () => {
  return (
    <MainLayout>
      <View>
        <Text>
          <Image source={briefcase} />
        </Text>
      </View>
    </MainLayout>
  );
};

export default Home;
