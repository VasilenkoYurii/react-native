import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const SumbitButton = ({
  title,
  onPress,
  bgColor = "#FF6C00",
  textColor = "#ffffff",
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bgColor }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 16,
    width: "100%",
    borderRadius: 100,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
  },
});
