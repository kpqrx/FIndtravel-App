import { View, Text } from "react-native";
import React from "react";
import Button from "../components/Button";

const Spendings = () => {
  return (
    <View className="items-center justify-center h-full">
      <Text>Spendings</Text>
      <Button variant="tertiary">Button secondary</Button>
    </View>
  );
};

export default Spendings;
