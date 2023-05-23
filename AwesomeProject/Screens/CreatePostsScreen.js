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
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { styles } from "../styles/createPostScreenStyled";
import { SumbitButton } from "../components/SubmitButton";

export const CreatePostScreen = () => {
  const [picture, setPicture] = useState(null);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -150}
      >
        <ScrollView style={styles.secondContainer}>
          <View style={styles.userPictureContainer}>
            {picture ? (
              <Image
                source={{ uri: picture }}
                style={styles.userAddedPicture}
              />
            ) : (
              <Image style={styles.userAddedPicture} />
            )}

            <TouchableOpacity
              style={picture ? styles.addPictureBtn : styles.addNoPictureBtn}
            >
              <MaterialIcons
                name="photo-camera"
                size={20}
                color={picture ? "#FFFFFF" : "#BDBDBD"}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.editPicturePrg}>Редактировать фото</Text>
          <TextInput style={styles.placeNameInput} placeholder="Название..." />
          <View>
            <TextInput style={styles.placeInput} placeholder="Местность..." />
            <MaterialIcons
              name="place"
              size={24}
              color="#BDBDBD"
              style={styles.placeIcon}
            />
          </View>
          {picture ? (
            <SumbitButton title="Опубликовать" />
          ) : (
            <SumbitButton
              bgColor="#F6F6F6"
              textColor="#BDBDBD"
              title="Опубликовать"
            />
          )}

          <View style={styles.removeAllPictureInfoContainer}>
            <TouchableOpacity style={styles.removeAllPictureInfo}>
              <Feather name="trash-2" size={24} color="#DADADA" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
