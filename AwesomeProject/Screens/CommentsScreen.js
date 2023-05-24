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
} from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "../styles/commentsScreenStyled";

export const CommentsScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -150}
      >
        <ScrollView style={styles.secondContainer}>
          <View style={styles.userPictureContainer}>
            <Image
              source={require("../images/regLogBg.png")}
              style={styles.userPicture}
            />
          </View>

          <View style={styles.commentsMainContainer}>
            <Image
              source={require("../images/userComment.png")}
              style={styles.userCommentIcon}
            />
            <View style={styles.commentsTextcontainer}>
              <Text style={styles.userMessage}>
                Really love your most recent photo. I’ve been trying to capture
                the same thing for a few months and would love some tips!
              </Text>
              <Text style={styles.userDateMessage}>
                09 червня, 2020 | 08:40
              </Text>
            </View>
          </View>

          <View style={styles.commentsMainContainer}>
            <View style={styles.accountCommentsTextcontainer}>
              <Text style={styles.userMessage}>
                A fast 50mm like f1.8 would help with the bokeh. I’ve been using
                primes as they tend to get a bit sharper images.
              </Text>
              <Text style={styles.userDateMessage}>
                09 червня, 2020 | 09:14
              </Text>
            </View>
            <Image
              source={require("../images/userPhoto.png")}
              style={styles.accountUserCommentIcon}
            />
          </View>

          <View style={styles.commentsMainContainer}>
            <Image
              source={require("../images/userComment.png")}
              style={styles.userCommentIcon}
            />
            <View style={styles.commentsTextcontainer}>
              <Text style={styles.userMessage}>
                Thank you! That was very helpful!
              </Text>
              <Text style={styles.userDateMessage}>
                09 червня, 2020 | 09:20
              </Text>
            </View>
          </View>

          <View>
            <TextInput
              style={styles.commentInput}
              placeholder="Коментувати..."
            />
            <TouchableOpacity style={styles.submitSendMessBtn}>
              <AntDesign name="arrowup" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
