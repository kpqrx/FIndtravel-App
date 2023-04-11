import { View, Text } from "react-native";
import React from "react";
import Button from "../components/Button";

const List = () => {
  return (
    <View className="items-center justify-center h-full">
      <Text>List</Text>
      <Button variant="secondary">Button secondary</Button>
    </View>
  );
};

export default List;
