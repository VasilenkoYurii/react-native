import {
  View,
  ScrollView,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import {
  AntDesign,
  MaterialIcons,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/profileScreenStyled";

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const handleExinInLogIn = () => {
    navigation.navigate("Login");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../images/regLogBg.png")}
          style={styles.bgImage}
        >
          <ScrollView>
            <View style={styles.formContainer}>
              <TouchableOpacity
                style={styles.exitBtn}
                onPress={() => handleExinInLogIn()}
              >
                <Feather name="log-out" size={24} color="#BDBDBD" />
              </TouchableOpacity>

              <View style={styles.imgContainer}>
                <Image source={require("../images/bigUserPhoto.png")} />
                <TouchableOpacity style={styles.addPhotoBtn}>
                  <AntDesign name="close" size={18} color="#BDBDBD" />
                </TouchableOpacity>
              </View>

              <Text style={styles.titleUserName}>Natali Romanova</Text>

              <View style={styles.userPictureContainer}>
                <Image
                  source={require("../images/userAddedPhoto.png")}
                  style={styles.userAddedPicture}
                />
                <View>
                  <Text style={styles.pictureName}>Forest</Text>
                  <View style={styles.pictureDescription}>
                    <View style={styles.pictureComments}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate("Коментарі");
                        }}
                      >
                        <FontAwesome name="comment" size={18} color="#FF6C00" />
                      </TouchableOpacity>
                      <Text style={styles.numberComments}>0</Text>
                      <TouchableOpacity>
                        <AntDesign name="like1" size={20} color="#FF6C00" />
                      </TouchableOpacity>
                      <Text style={styles.numberComments}>0</Text>
                    </View>
                    <View style={styles.picturePlace}>
                      <MaterialIcons name="place" size={24} color="#BDBDBD" />
                      <Text style={styles.picturePlaceDesctiption}>
                        Ukraine
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
