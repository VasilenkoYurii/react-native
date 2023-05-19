import { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import { SumbitButton } from "../components/SubmitButton";
import { styles } from "../styles/registraitionStyles";

export const RegistrationScreen = () => {
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

  return (
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
          {/* [styles.formInput, isActive && styles.activeFormInput] */}
          <Text style={styles.formTitle}>Регистрация</Text>
          <TextInput
            style={[styles.formInput, isLoginActive && styles.activeFormInput]}
            onFocus={handleLoginFocus}
            onBlur={handleLoginBlur}
            placeholder="Логин"
          />
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
          <SumbitButton title={"Зарегистрироваться"} />
          <TouchableOpacity>
            <Text style={styles.prgIfWasAcc}>Уже есть аккаунт? Войти</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};
