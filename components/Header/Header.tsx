import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import {
  GlobeAsiaAustraliaIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import colors from "tailwindcss/colors";

const Header = () => {
  return (
    <SafeAreaView className="bg-lime-500">
      <View className="flex-row justify-between px-3 py-2">
        <View className="flex-row items-center gap-3 justify-start">
          <GlobeAsiaAustraliaIcon color={colors.white} />
          <Text className="text-xl font-bold text-white">findtravel</Text>
        </View>
        <AdjustmentsVerticalIcon color={colors.white} />
      </View>
    </SafeAreaView>
  );
};

export default Header;
