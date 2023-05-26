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
import { useNavigation } from "@react-navigation/native";
import { SumbitButton } from "../components/SubmitButton";
import { styles } from "../styles/registraitionStyles";
import { reducer } from "../helpers/reduserRegLog";

import { useDispatch } from "react-redux";
import { register } from "../redux/operations";

export const RegistrationScreen = () => {
  const dispatchRedax = useDispatch();

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
    try {
      console.debug(
        `Hello ${state.name}, you have entered your email: ${state.email}, and password: ${state.password}`
      );

      dispatchRedax(
        register({
          name: state.name,
          email: state.email,
          password: state.password,
        })
      ).then((registrationResult) => {
        if (registrationResult.payload) {
          dispatch({ type: "reset" });
          navigation.navigate("Login");
        } else {
          Alert.alert("Registration failed", "Email is already registered");
        }
      });
    } catch (error) {
      console.error("Error during registration:", error);
      Alert.alert("Something went wrong, please try again");
    }
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
              {state.name && state.email && state.password ? (
                <SumbitButton
                  title={"Зареєстуватися"}
                  onPress={() => {
                    handleFormSubmit();
                  }}
                />
              ) : (
                <SumbitButton
                  bgColor="#F6F6F6"
                  textColor="#BDBDBD"
                  title="Зареєстуватися"
                  onPress={() => {
                    Alert.alert("Заповніть всі поля");
                  }}
                />
              )}
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
