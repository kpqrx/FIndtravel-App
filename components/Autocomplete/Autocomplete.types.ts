import { ListRenderItem, TextInputProps } from "react-native";

export interface AutocompleteProps<DataItemType> extends TextInputProps {
  label: string;
  placeholder: string;
  data: DataItemType[];
  renderItem: ListRenderItem<DataItemType>;
  onSelect: React.Dispatch<React.SetStateAction<CityItemType>>;
  onQueryChange: (query: string) => void;
}

export type CityItemType = { geonameId: number; city: string; country: string };

export type AutocompleteContextType = {
  handleSelection: (value: CityItemType) => void;
};
