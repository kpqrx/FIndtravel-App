import {
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  SafeAreaView,
} from "react-native";
import React from "react";
import {
  AutocompleteListItemProps,
  AutocompleteProps,
} from "./Autocomplete.types";

const Autocomplete = <T extends {}>(props: AutocompleteProps<T>) => {
  const { label, placeholder, data, renderItem, ...restProps } = props;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View className="w-full relative" {...restProps}>
        <Text className="absolute left-3 px-1.5 bg-gray-100 text-xs z-10">
          {label}
        </Text>
        <TextInput
          className="rounded-xl border border-gray-400 p-4 mt-2"
          placeholder={placeholder}
        />
        <SafeAreaView className="rounded-lg border border-gray-300 w-full h-3/4 mt-2 bg-gray-50 shadow-md">
          <View className="w-0 h-0 border-[12px] border-t-0 border-transparent border-b-white -top-3 left-2 absolute" />
          <FlatList className="px-4 py-2" data={data} renderItem={renderItem} />
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const ListItem = (props: AutocompleteListItemProps) => {
  const {
    labelPrimary,
    labelSecondary = "",
    icon: Icon = undefined,
    ...restProps
  } = props;

  return (
    <View
      className="py-3 border-b border-gray-300 gap-2 justify-center"
      {...restProps}
    >
      {Icon && <Icon />}
      <View className="gap-1">
        <Text>{labelPrimary}</Text>
        {labelSecondary && (
          <Text className="text-xs text-gray-500">{labelSecondary}</Text>
        )}
      </View>
    </View>
  );
};

const AutocompleteNamespace = Object.assign(Autocomplete, { ListItem });

export default AutocompleteNamespace;
