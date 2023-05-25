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
  Alert,
} from "react-native";
import { useState, useEffect } from "react";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/createPostScreenStyled";
import { SumbitButton } from "../components/SubmitButton";

export const CreatePostScreen = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const [post, setPost] = useState({
    picture: "",
    title: "",
    place: "",
    geo: "",
  });

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  const hendleGeoLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
    }

    let location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setPost((prevPost) => {
      return {
        ...post,
        geo: coords,
      };
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -150}
      >
        <ScrollView style={styles.secondContainer}>
          {hasPermission === null || hasPermission === false ? (
            <View style={styles.userPictureContainer}>
              <Image style={styles.userAddedPicture} />

              <TouchableOpacity
                style={
                  post.picture ? styles.addPictureBtn : styles.addNoPictureBtn
                }
              >
                <MaterialIcons
                  name="photo-camera"
                  size={20}
                  color={post.picture ? "#FFFFFF" : "#BDBDBD"}
                />
              </TouchableOpacity>
            </View>
          ) : post.picture ? (
            <View style={styles.userPictureContainer}>
              <Image
                source={{ uri: post.picture }}
                style={styles.userAddedPicture}
              />

              <TouchableOpacity
                style={
                  post.picture ? styles.addPictureBtn : styles.addNoPictureBtn
                }
                onPress={() => {
                  setPost((prevPost) => {
                    return {
                      ...post,
                      picture: "",
                    };
                  });
                }}
              >
                <MaterialIcons
                  name="photo-camera"
                  size={20}
                  color={post.picture ? "#FFFFFF" : "#BDBDBD"}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.userPictureContainer}>
              <Camera style={styles.camera} type={type} ref={setCameraRef}>
                <View style={styles.photoView}>
                  <TouchableOpacity
                    style={
                      post.picture
                        ? styles.addPictureBtn
                        : styles.addNoPictureBtn
                    }
                    onPress={async () => {
                      if (cameraRef) {
                        const { uri } = await cameraRef.takePictureAsync();
                        await MediaLibrary.createAssetAsync(uri);
                        console.debug(uri);

                        setPost((prevPost) => {
                          return {
                            ...post,
                            picture: uri,
                          };
                        });
                      }
                    }}
                  >
                    <MaterialIcons
                      name="photo-camera"
                      size={20}
                      color={post.picture ? "#FFFFFF" : "#BDBDBD"}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.flipContainer}
                    onPress={() => {
                      setType(
                        type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back
                      );
                    }}
                  >
                    <Text style={{ fontSize: 18, color: "white" }}>Flip</Text>
                  </TouchableOpacity>
                </View>
              </Camera>
            </View>
          )}

          <Text style={styles.editPicturePrg}>
            {post.picture ? "Редагувати фото" : "Завантажте фото"}
          </Text>
          <TextInput
            style={styles.placeNameInput}
            placeholder="Назва..."
            value={post.title}
            onChangeText={(e) => {
              setPost((prevPost) => {
                return {
                  ...post,
                  title: e,
                };
              });
            }}
          />
          <View>
            <TextInput
              style={styles.placeInput}
              placeholder="Місцевість..."
              value={post.place}
              onChangeText={(e) => {
                setPost((prevPost) => {
                  return {
                    ...post,
                    place: e,
                  };
                });
              }}
            />
            <MaterialIcons
              name="place"
              size={24}
              color="#BDBDBD"
              style={styles.placeIcon}
            />
          </View>
          {post.picture && post.title && post.place ? (
            <SumbitButton
              title="Опубліковати"
              onPress={() => {
                hendleGeoLocation();

                navigation.navigate("Публікації");
              }}
            />
          ) : (
            <SumbitButton
              bgColor="#F6F6F6"
              textColor="#BDBDBD"
              title="Опубліковати"
              onPress={() => {
                Alert.alert("Заполніть усі поля");
              }}
            />
          )}

          <View style={styles.removeAllPictureInfoContainer}>
            <TouchableOpacity
              style={styles.removeAllPictureInfo}
              onPress={() => {
                setPost((prevPost) => {
                  return {
                    picture: "",
                    title: "",
                    place: "",
                  };
                });
              }}
            >
              <Feather name="trash-2" size={24} color="#DADADA" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
