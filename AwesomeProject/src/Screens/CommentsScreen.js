import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import { selectUser, selectPosts } from "../redux/selectors";
import { addCommentToPost } from "../redux/operations";
import { styles } from "../styles/commentsScreenStyled";

export const CommentsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const allPosts = useSelector(selectPosts);
  const [commentText, setCommentText] = useState("");
  const route = useRoute();
  const { post } = route.params;

  const handleSubmitComment = () => {
    const newComment = {
      postId: post.id,
      comment: {
        userName: user.name,
        text: commentText,
      },
    };

    dispatch(addCommentToPost(newComment));

    setCommentText("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={styles.container}>
        <View style={styles.secondContainer}>
          <View>
            <View style={styles.userPictureContainer}>
              <Image
                source={{ uri: post.picture }}
                style={styles.userPicture}
              />
            </View>
          </View>

          {post.comments !== 0 &&
            post.comments.map(({ date, text, userName }) => {
              console.debug(user.name === userName);
              if (user.name === userName) {
                return (
                  <View style={styles.commentsMainContainer} key={date}>
                    <View style={styles.accountCommentsTextcontainer}>
                      <Text style={styles.userMessage}>{text}</Text>
                      <Text style={styles.userDateMessage}>{date}</Text>
                    </View>
                    <Image
                      source={require("../images/userPhoto.png")}
                      style={styles.accountUserCommentIcon}
                    />
                  </View>
                );
              }
              return (
                <View style={styles.commentsMainContainer} key={date}>
                  <Image
                    source={require("../images/userComment.png")}
                    style={styles.userCommentIcon}
                  />
                  <View style={styles.commentsTextcontainer}>
                    <Text style={styles.userMessage}>{text}</Text>
                    <Text style={styles.userDateMessage}>{date}</Text>
                  </View>
                </View>
              );
            })}

          <View>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              keyboardVerticalOffset={Platform.select({
                ios: -150,
                android: 0,
              })}
              style={{ flex: 1 }}
            >
              <TextInput
                style={styles.commentInput}
                placeholder="Комментировать..."
                value={commentText}
                onChangeText={(text) => setCommentText(text)}
              />
            </KeyboardAvoidingView>
            <TouchableOpacity
              style={styles.submitSendMessBtn}
              onPress={handleSubmitComment}
            >
              <AntDesign name="arrowup" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
