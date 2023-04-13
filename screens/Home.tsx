import { View } from "react-native";
import React from "react";
import Autocomplete from "../components/Autocomplete";

type ListItemType = { id: number; city: string; country: string };

const Home = () => {
  return (
    <View className="px-3 py-5">
      <Autocomplete<ListItemType>
        label="Miasto"
        placeholder="Podaj nazwę miasta..."
        data={[]}
        renderItem={({ item }) => (
          <Autocomplete.ListItem
            labelPrimary={item.city}
            labelSecondary={item.country}
          />
        )}
      />
    </View>
  );
};

export default Home;
