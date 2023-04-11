import { View, TouchableOpacity } from "react-native";
import React from "react";
import { useIsFocused } from "@react-navigation/native";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";

const TabBarButton = (props: BottomTabBarButtonProps) => {
  const { children, ...restProps } = props;
  const isFocused = useIsFocused();

  return (
    <TouchableOpacity {...restProps} className="h-16">
      {children}
      {isFocused && <View className="w-3 h-1 rounded bg-lime-500 -top-1.5" />}
    </TouchableOpacity>
  );
};

export default TabBarButton;
