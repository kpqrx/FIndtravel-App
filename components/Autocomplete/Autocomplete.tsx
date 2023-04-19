import { Text, TextInput, View, FlatList, Pressable } from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { MapPinIcon } from "react-native-heroicons/outline";
import {
  AutocompleteContextType,
  AutocompleteProps,
  CityItemType,
} from "./Autocomplete.types";
import { createContext } from "react";
import { debounce } from "../../utils";
import { gray } from "tailwindcss/colors";

const AutocompleteContext = createContext<AutocompleteContextType | null>(null);

const Autocomplete = <T extends {}>(props: AutocompleteProps<T>) => {
  const {
    label,
    placeholder,
    data,
    renderItem,
    className,
    onSelect,
    onQueryChange,
    ...restProps
  } = props;

  const debouncedQueryChange = useCallback(
    debounce((text: string) => onQueryChange(text), 800),
    []
  );

  const [isListVisible, setListVisible] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => setListVisible(data.length > 0), [data]);

  const handleBlur = () => {
    setListVisible(false);
  };

  const handleFocus = () => {
    setListVisible(data.length > 0);
  };

  const handleSelection = (value: CityItemType) => {
    onSelect(value);
    setListVisible(false);
    setValue(value.city as string);
  };

  return (
    <AutocompleteContext.Provider value={{ handleSelection }}>
      <View className={`w-full relative ${className}`}>
        <Text className="absolute left-3 px-1.5 bg-gray-100 text-xs z-10">
          {label}
        </Text>
        <TextInput
          className="rounded-xl border border-gray-400 p-4 mt-2"
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={(x) => {
            setValue(x);
            debouncedQueryChange(x);
          }}
          value={value}
          {...restProps}
        />
        {isListVisible && (
          // TODO: fix list height
          <View className="rounded-lg border border-gray-300 bg-gray-50 w-full h-2/3 mt-2 shadow-md">
            <FlatList
              className="px-4 py-2"
              data={data}
              renderItem={renderItem}
            />
          </View>
        )}
      </View>
    </AutocompleteContext.Provider>
  );
};

const ListItem = (props: CityItemType) => {
  const { city, country, id, ...restProps } = props;

  const { handleSelection } = useContext(AutocompleteContext)!;

  return (
    <Pressable
      className="py-3 border-b flex-row border-gray-300 gap-2 items-center"
      onPress={() => handleSelection({ city, country, id })!}
      {...restProps}
    >
      <MapPinIcon color={gray[500]} />
      <View className="gap-1">
        <Text>{city}</Text>
        <Text className="text-xs text-gray-500">{country}</Text>
      </View>
    </Pressable>
  );
};

const AutocompleteNamespace = Object.assign(Autocomplete, { ListItem });

export default AutocompleteNamespace;
