import { ListRenderItem, TextInputProps } from "react-native";

export interface AutocompleteProps<DataItemType> extends TextInputProps {
  label: string;
  placeholder: string;
  data: DataItemType[];
  renderItem: ListRenderItem<DataItemType>;
}

export interface AutocompleteListItemProps {
  labelPrimary: string;
  labelSecondary?: string;
  icon?: () => JSX.Element;
}
