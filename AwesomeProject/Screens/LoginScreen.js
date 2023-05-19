import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import { SumbitButton } from "../components/SubmitButton";

export const LoginScreen = () => {
  const [isEmailActive, setIsEmailActive] = useState(false);
  const [isPasswordActive, setIsPasswordActive] = useState(false);
  const [hiddenPassword, setHiddenPassword] = useState(true);

  const handleEmailFocus = () => {
    setIsEmailActive(true);
  };

  const handleEmailBlur = () => {
    setIsEmailActive(false);
  };

  const handlePasswordFocus = () => {
    setIsPasswordActive(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordActive(false);
  };

  const handleHiddenPassword = () => {
    setHiddenPassword(!hiddenPassword);
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require("../images/regLogBg.png")}
        style={styles.bgImage}
      >
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Войти</Text>

          <TextInput
            style={[styles.formInput, isEmailActive && styles.activeFormInput]}
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
            placeholder="Адрес электронной почты"
          />
          <View style={styles.passwordcontainer}>
            <TextInput
              style={[
                styles.formLastInput,
                isPasswordActive && styles.activeFormInput,
              ]}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              placeholder="Пароль"
              secureTextEntry={hiddenPassword}
              type="password"
            />
            <TouchableOpacity
              style={styles.showPasswordContainer}
              onPress={handleHiddenPassword}
            >
              <Text style={styles.showPasswordText}>Показать</Text>
            </TouchableOpacity>
          </View>
          <SumbitButton title={"Войти"} />
          <TouchableOpacity>
            <Text style={styles.prgIfWasAcc}>
              Нет аккаунта? Зарегистрироваться
            </Text>
          </TouchableOpacity>
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
    position: "relative",
    backgroundColor: "#ffffff",
    width: "100%",
    height: 549,
    paddingRight: 16,
    paddingLeft: 16,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,

    alignItems: "center",
  },
  imgContainer: {
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
    borderRadius: 16,

    position: "absolute",
    top: -60,
  },
  addPhotoBtn: {
    position: "absolute",
    right: -12,
    bottom: 14,
  },
  formText: {
    backgroundColor: "#fff",
  },
  formTitle: {
    // fontFamily: "Roboto",
    color: "#212121",
    marginTop: 92,
    marginBottom: 33,
    fontSize: 30,
    lineHeight: 35.16,
  },

  formInput: {
    marginBottom: 16,
    paddingLeft: 16,

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
  showPasswordContainer: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  showPasswordText: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 18.75,
    padding: 16,
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
  activeFormInput: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  },
  prgIfWasAcc: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
  },
});
