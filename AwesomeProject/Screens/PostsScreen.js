import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/mapScreenStyled";

export const PostsScreen = () => {
  const navigation = useNavigation();

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
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
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
            <View style={styles.picturePlace}>
              <MaterialIcons name="place" size={24} color="#BDBDBD" />
              <Text>Ivano-Frankivs'k Region, Ukraine</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
