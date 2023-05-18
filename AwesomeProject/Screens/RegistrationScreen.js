import { StyleSheet, Text, View, ImageBackground } from "react-native";

export const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/regLogBg.png")}
        style={styles.bgImage}
      >
        <View style={styles.formContainer}>
          <Text style={styles.formText}>Hello world</Text>
          <Text>First react native app</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    // justifyContent: "center",
    width: 414.4,
    height: 812,
  },
  formContainer: {
    backgroundColor: "#ffffff",
    width: 400,
    height: 400,
  },
  formText: {
    backgroundColor: "#fff",
  },
});
