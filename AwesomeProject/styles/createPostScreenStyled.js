import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#FFFFFF",
    borderStyle: "solid",
    borderTopColor: "#EEE",
    borderTopWidth: 1,
  },
  secondContainer: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  userPictureContainer: {
    width: "100%",
    height: 240,
    marginBottom: 8,
    borderRadius: 8,

    justifyContent: "center",
    alignItems: "center",
  },
  userAddedPicture: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    backgroundColor: "#E8E8E8",
  },
  addNoPictureBtn: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 30,

    position: "absolute",
  },
  addPictureBtn: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 30,

    position: "absolute",
  },
  editPicturePrg: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,

    marginBottom: 48,
  },

  placeNameInput: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    borderStyle: "solid",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,

    paddingBottom: 15,
    marginBottom: 32,
  },
  placeInput: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    borderStyle: "solid",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,

    paddingBottom: 15,
    paddingLeft: 28,
    marginBottom: 32,
  },
  placeIcon: {
    position: "absolute",
    top: 3,
  },
  removeAllPictureInfoContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
  },
  removeAllPictureInfo: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",

    borderRadius: 20,

    marginBottom: 20,
  },
  camera: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  photoView: {
    width: "100%",
    height: "100%",
    borderRadius: 8,

    backgroundColor: "transparent",

    justifyContent: "center",
    alignItems: "center",
  },
  flipContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 15,
  },
});
