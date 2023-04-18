import { Text, Pressable } from "react-native";
import React from "react";
import { ButtonProps } from "./Button.types";
import { black, white } from "tailwindcss/colors";

const styles = {
  container: {
    primary: "px-12 py-3 bg-lime-500 rounded-xl",
    secondary: "px-12 py-3 text-black border-2 border-lime-500 rounded-xl",
    tertiary: "px-4 py-2 border-2 border-black rounded-3xl",
  },
  text: {
    primary: "text-white font-bold text-center",
    secondary: "text-black font-bold text-center",
    tertiary: "text-black font-bold text-center text-xs",
  },
  icon: {
    primary: {
      color: white,
    },
    secondary: {
      color: black,
    },
    tertiary: {
      color: white,
    },
  },
};

// TODO: dynamic icon import based on prop value
// TODO: research possible better conditional styling with Nativewind

const Button = (props: ButtonProps) => {
  const { children, variant = "primary", ...restProps } = props;

  return (
    <Pressable className={styles.container[variant]} {...restProps}>
      <Text className={styles.text[variant]}>{children}</Text>
    </Pressable>
  );
};

export default Button;
