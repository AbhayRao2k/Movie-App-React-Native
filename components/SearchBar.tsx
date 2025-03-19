import { View, Text, Image, TextInput, TextInputProps } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface Props extends TextInputProps {
    placeholder: string;
    onPress: () => void;
    value?: string;
    onChangeText?: (text: string) => void;
    autoFocus?: boolean;
}

const SearchBar = ({ placeholder, onPress, value, onChangeText, autoFocus }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#AB8BFF"
      />

      <TextInput
        autoFocus={autoFocus}
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#A8B5DB"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
