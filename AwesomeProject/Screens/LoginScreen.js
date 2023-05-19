import { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { SumbitButton } from "../components/SubmitButton";
import { styles } from "../styles/loginStyles";

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
