import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  ScrollView,
  Button,
} from "react-native";

export const RegistrationScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require("../images/regLogBg.png")}
        style={styles.bgImage}
      >
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Регистрация</Text>
          <TextInput style={styles.formInput} placeholder="Логин" />
          <TextInput
            style={styles.formInput}
            placeholder="Адрес электронной почты"
          />
          <View style={styles.passwordcontainer}>
            <TextInput
              style={styles.formLastInput}
              placeholder="Пароль"
              type="password"
            />
            <Text style={styles.showPassword}>Показать</Text>
          </View>
          <Button
            title="Зарегистрироваться"
            color="#FF6C00"
            style={styles.formButtomSubmit}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    height: 812,
  },
  formContainer: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: 549,
    paddingRight: 16,
    paddingLeft: 16,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,

    alignItems: "center",
  },
  formText: {
    backgroundColor: "#fff",
  },
  formTitle: {
    // fontFamily: "Roboto",
    fontStyle: "Medium",
    color: "#212121",
    marginTop: 92,
    marginBottom: 33,
    fontSize: 30,
    lineHeight: 35.16,
  },

  formInput: {
    marginBottom: 16,
    padding: 16,

    backgroundColor: "#f6f6f6",
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    width: "100%",

    fontSize: 16,
    lineHeight: 18.75,
  },
  passwordcontainer: {
    position: "relative",
    width: "100%",
  },
  showPassword: {
    position: "absolute",
    top: 16,
    right: 16,
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 18.75,
  },
  formLastInput: {
    marginBottom: 43,

    padding: 16,

    backgroundColor: "#f6f6f6",
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    width: "100%",

    fontSize: 16,
    lineHeight: 18.75,
  },

  formButtomSubmit: {
    width: "100%",
    borderRadius: 100,
  },
});
