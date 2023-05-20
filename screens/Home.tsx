import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "./Search";
import CityDetails from "./CityDetails";
import Header from "../components/Header/Header";

const Home = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Search"
        component={Search}
        options={{ header: Header }}
      />
      <HomeStack.Screen
        name="CityDetails"
        component={CityDetails}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

export default Home;
