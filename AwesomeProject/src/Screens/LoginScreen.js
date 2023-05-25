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
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { SumbitButton } from "../components/SubmitButton";
import { styles } from "../styles/loginStyles";
import { reducer } from "../helpers/reduserRegLog";

export const LoginScreen = () => {
  const navigation = useNavigation();
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
              <Text style={styles.formTitle}>Увійти</Text>
              <View style={styles.inputBox}>
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
              </View>
              <View style={styles.passwordcontainer}>
                <View style={styles.inputBox}>
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
                </View>
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
                title={"Увійти"}
                onPress={() => {
                  handleFormSubmit();
                  dispatch({
                    type: "reset",
                  });
                }}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate("Registration")}
              >
                <Text style={styles.prgIfWasAcc}>
                  Немає акаунту?{" "}
                  <Text style={styles.prgIfWasAccSpan}>Зареєструватися</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
