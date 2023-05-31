import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectUser, selectPosts } from "../redux/selectors";
import { styles } from "../styles/postScreenStyled";

export const PostsScreen = () => {
  const navigation = useNavigation();

  const user = useSelector(selectUser);
  const posts = useSelector(selectPosts);

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

      {posts.length !== 0 &&
        posts.map((post, index) => {
          return (
            <View
              key={`${post.picture}-${index}`}
              style={styles.userPictureContainer}
            >
              <Image
                source={{ uri: post.picture }}
                style={styles.userAddedPicture}
              />
              <View>
                <Text style={styles.pictureName}>{post.title}</Text>
                <View style={styles.pictureDescription}>
                  <View style={styles.pictureComments}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Коментарі", {
                          post,
                        });
                      }}
                    >
                      <EvilIcons name="comment" size={24} color="#BDBDBD" />
                    </TouchableOpacity>
                    <Text style={styles.numberComments}>
                      {post.comments.length}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.picturePlace}
                    onPress={() => {
                      navigation.navigate("Map", { geo: post.geo });
                    }}
                  >
                    <MaterialIcons name="place" size={24} color="#BDBDBD" />
                    <Text>{post.place}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}
    </ScrollView>
  );
};
