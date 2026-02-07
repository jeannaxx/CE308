import { Pressable, Text, StyleSheet } from "react-native";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  size: "sm" | "md" | "lg";
  variant: "primary" | "secondary" | "danger";
};

export const CustomButton = ({
  title,
  onPress,
  size,
  variant,
}: CustomButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.base,
        styles[variant],
        styles[size],
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 14,
  },
  primary: { backgroundColor: "#2563eb" },
  secondary: { backgroundColor: "#6b7280" },
  danger: { backgroundColor: "#dc2626" },

  sm: { paddingVertical: 6 },
  md: { paddingVertical: 8 },
  lg: { paddingVertical: 10 },

  text: {
    color: "#fff",
    fontWeight: "600",
  },
});
