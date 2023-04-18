import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { useEffect, useState } from "react";
import Autocomplete from "../components/Autocomplete";
import Button from "../components/Button/Button";
import axios from "axios";

type ListItemType = { id: number; city: string; country: string };

const Home = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [city, setCity] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (!query) {
        setData([]);
      }

      try {
        const { data } = await axios.get(
          `http://192.168.1.7:3000/api/city/listing/${query}`
        );
        setData(data);
      } catch (error) {
        alert(error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}
    >
      <View className="px-3 py-6 flex-1">
        <Text className="text-lg mb-6">Co chciałbyś zwiedzić?</Text>
        <Autocomplete<ListItemType>
          onQueryChange={setQuery}
          onSelect={setCity}
          className="mb-6"
          label="Miasto"
          placeholder="Podaj nazwę miasta..."
          data={data}
          renderItem={({ item }) => <Autocomplete.ListItem {...item} />}
        />
        <View className="-z-10">
          <Button>Wyszukaj miasto</Button>
          <View className="relative py-6 items-center">
            <View className="w-1/2 h-px bg-gray-400 top-1/2" />
            <Text className="px-3 bg-gray-100">lub</Text>
          </View>
          <Button variant="secondary">Pokaż atrakcje w okolicy</Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;
