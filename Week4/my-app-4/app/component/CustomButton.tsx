import { Pressable, Text, StyleSheet } from "react-native";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  variant: "primary" | "secondary" | "danger";
  size: "sm" | "md" | "lg";
};

export const CustomButton = ({
  title,
  onPress,
  variant,
  size,
}: CustomButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        styles[size],
        pressed && { opacity: 0.7 },
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    width: "100%",              // ✅ สำคัญมาก
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  primary: { backgroundColor: "#2563eb" },
  secondary: { backgroundColor: "#6b7280" },
  danger: { backgroundColor: "#dc2626" },

  sm: {
    paddingVertical: 8,
  },
  md: {
    paddingVertical: 12,
  },
  lg: {
    paddingVertical: 16,
  },
  text: {
    color: "white",
    fontWeight: "600",
  },
});
