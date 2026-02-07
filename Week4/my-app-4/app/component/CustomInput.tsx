import { View, Text, TextInput } from "react-native";

type CustomInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export const CustomInput = ({
  label,
  value,
  onChangeText,
  placeholder,
}: CustomInputProps) => {
  return (
    <View style={{ marginBottom: 12 }}>
      <Text style={{ marginBottom: 4, fontWeight: "600" }}>{label}</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#d2d2d2",
          borderRadius: 6,
          paddingHorizontal: 10,
          paddingVertical: 8,
        }}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};