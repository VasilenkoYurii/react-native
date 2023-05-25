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
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { SumbitButton } from "../components/SubmitButton";
import { styles } from "../styles/registraitionStyles";
import { reducer } from "../helpers/reduserRegLog";
// import { useSelector } from "react-redux";
// import { selectUser } from "../redux/selectors";
// const { user } = useSelector((state) => state.user);
// console.debug(user);

export const RegistrationScreen = () => {
  const navigation = useNavigation();
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
    navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -150}
      >
        <ImageBackground
          source={require("../images/regLogBg.png")}
          style={styles.bgImage}
        >
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.formContainer}>
              <View style={styles.imgContainer}>
                <TouchableOpacity style={styles.addPhotoBtn}>
                  <Image source={require("../images/addPhotoBtn.png")} />
                </TouchableOpacity>
              </View>

              <Text style={styles.formTitle}>Реєстрація</Text>
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
                  placeholder="Логін"
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
                  placeholder="Адреса електронної пошти"
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
                    {hiddenPassword ? "Показати" : "Скрити"}
                  </Text>
                </TouchableOpacity>
              </View>
              <SumbitButton
                title={"Зареєстуватися"}
                onPress={() => {
                  handleFormSubmit();
                  dispatch({
                    type: "reset",
                  });
                }}
              />
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.prgIfWasAcc}>Вже є акаунт? Увійти</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};