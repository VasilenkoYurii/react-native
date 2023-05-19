import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const SumbitButton = ({ title }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#FF6C00",
    padding: 16,
    width: "100%",
    borderRadius: 100,
    marginBottom: 16,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
