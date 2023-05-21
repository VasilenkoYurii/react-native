import { useState, useReducer } from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import { SumbitButton } from "../components/SubmitButton";
import { styles } from "../styles/loginStyles";
import { reducer } from "../helpers/reduserRegLog";

export const LoginScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    email: "",
    password: "",
  });

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

  const handleFormSubmit = () => {
    console.debug(
      `Hello, your email: ${state.email}, password: ${state.password}`
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={styles.container}>
        <ImageBackground
          source={require("../images/regLogBg.png")}
          style={styles.bgImage}
        >
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Войти</Text>
            <KeyboardAvoidingView
              style={styles.inputBox}
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                style={[
                  styles.formInput,
                  isEmailActive && styles.activeFormInput,
                ]}
                value={state.email}
                onChangeText={(e) => {
                  dispatch({
                    type: "email",
                    newEmail: e,
                  });
                }}
                onFocus={handleEmailFocus}
                onBlur={handleEmailBlur}
                placeholder="Адрес электронной почты"
              />
            </KeyboardAvoidingView>
            <View style={styles.passwordcontainer}>
              <KeyboardAvoidingView
                style={styles.inputBox}
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <TextInput
                  style={[
                    styles.formLastInput,
                    isPasswordActive && styles.activeFormInput,
                  ]}
                  value={state.password}
                  onChangeText={(e) => {
                    dispatch({
                      type: "password",
                      newPassword: e,
                    });
                  }}
                  onFocus={handlePasswordFocus}
                  onBlur={handlePasswordBlur}
                  placeholder="Пароль"
                  secureTextEntry={hiddenPassword}
                  type="password"
                />
              </KeyboardAvoidingView>
              <TouchableOpacity
                style={styles.showPasswordContainer}
                onPress={handleHiddenPassword}
              >
                <Text style={styles.showPasswordText}>
                  {hiddenPassword ? "Показать" : "Скрыть"}
                </Text>
              </TouchableOpacity>
            </View>
            <SumbitButton
              title={"Войти"}
              onPress={() => {
                handleFormSubmit();
                dispatch({
                  type: "reset",
                });
              }}
            />
            <TouchableOpacity>
              <Text style={styles.prgIfWasAcc}>
                Нет аккаунта? Зарегистрироваться
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
