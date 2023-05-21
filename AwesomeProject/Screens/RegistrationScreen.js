import { useState, useReducer } from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import { SumbitButton } from "../components/SubmitButton";
import { styles } from "../styles/registraitionStyles";
import { reducer } from "../helpers/reduserRegLog";

export const RegistrationScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    password: "",
  });

  const [isLoginActive, setIsLoginActive] = useState(false);
  const [isEmailActive, setIsEmailActive] = useState(false);
  const [isPasswordActive, setIsPasswordActive] = useState(false);
  const [hiddenPassword, setHiddenPassword] = useState(true);

  const handleLoginFocus = () => {
    setIsLoginActive(true);
  };

  const handleLoginBlur = () => {
    setIsLoginActive(false);
  };

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
      `Hello ${state.name}, you have entered your email: ${state.email}, and password: ${state.password}`
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
            <View style={styles.imgContainer}>
              <TouchableOpacity style={styles.addPhotoBtn}>
                <Image source={require("../images/addPhotoBtn.png")} />
              </TouchableOpacity>
            </View>

            <Text style={styles.formTitle}>Регистрация</Text>
            <KeyboardAvoidingView
              style={styles.inputBox}
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                style={[
                  styles.formInput,
                  isLoginActive && styles.activeFormInput,
                ]}
                value={state.name}
                onChangeText={(e) => {
                  dispatch({
                    type: "name",
                    newName: e,
                  });
                }}
                onFocus={handleLoginFocus}
                onBlur={handleLoginBlur}
                placeholder="Логин"
              />
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
              title={"Зарегистрироваться"}
              onPress={() => {
                handleFormSubmit();
                dispatch({
                  type: "reset",
                });
              }}
            />
            <TouchableOpacity>
              <Text style={styles.prgIfWasAcc}>Уже есть аккаунт? Войти</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
