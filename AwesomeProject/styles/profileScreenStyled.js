import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
  },

  formContainer: {
    flex: 1,

    position: "relative",
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
    minHeight: 600,
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 92,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,

    alignItems: "center",

    marginTop: 147,
  },
  exitBtn: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  imgContainer: {
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
    borderRadius: 16,

    position: "absolute",
    top: -60,
  },
  addPhotoBtn: {
    position: "absolute",
    right: -13,
    bottom: 14,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",

    width: 26,
    height: 26,

    borderRadius: 13,

    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderWidth: 1,
  },
  formText: {
    backgroundColor: "#fff",
  },
  titleUserName: {
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 32,
  },

  //-------------------------------------------------------

  userPictureContainer: {
    marginBottom: 32,
    width: "100%",
  },
  userAddedPicture: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  pictureName: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    fontWeight: "700",
    color: "#212121",

    marginTop: 8,
    marginBottom: 10,
  },
  numberComments: {
    color: "#BDBDBD",
    marginLeft: 5,
    marginRight: 25,

    fontSize: 16,
    color: "#212121",
  },
  pictureDescription: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pictureComments: {
    display: "flex",
    flexDirection: "row",
  },
  picturePlace: {
    display: "flex",
    flexDirection: "row",
  },
  picturePlaceDesctiption: {
    fontSize: 16,
    color: "#212121",
    textDecorationLine: "underline",
  },
});
