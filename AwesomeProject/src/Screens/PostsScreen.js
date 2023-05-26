import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/selectors";
import { styles } from "../styles/postScreenStyled";

export const PostsScreen = () => {
  const navigation = useNavigation();

  const user = useSelector(selectUser);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.userContainer}>
        <View style={styles.userPhotoContainer}>
          <Image
            source={require("../images/userPhoto.png")}
            style={styles.userPhoto}
          />
        </View>

        <View style={styles.userNameContainer}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
      </View>

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
                <EvilIcons name="comment" size={24} color="#BDBDBD" />
              </TouchableOpacity>
              <Text style={styles.numberComments}>0</Text>
            </View>
            <TouchableOpacity
              style={styles.picturePlace}
              onPress={() => {
                navigation.navigate("Map");
              }}
            >
              <MaterialIcons name="place" size={24} color="#BDBDBD" />
              <Text>Ivano-Frankivs'k Region, Ukraine</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
