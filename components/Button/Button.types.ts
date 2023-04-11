import { PressableProps } from "react-native";
import Heroicons from "react-native-heroicons/outline";

type HeroiconNameType = keyof typeof Heroicons;

export type ButtonVariantType = "primary" | "secondary" | "tertiary";

export interface ButtonProps extends PressableProps {
  variant?: ButtonVariantType;
  children: string;
}
