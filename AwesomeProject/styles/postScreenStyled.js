import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#FFFFFF",
    borderStyle: "solid",
    borderTopColor: "#EEE",
    borderTopWidth: 1,
  },
  userContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    marginBottom: 32,
  },
  userPhotoContainer: {
    width: 60,
    height: 60,
    marginRight: 8,
  },
  userPhoto: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  userNameContainer: {
    justifyContent: "center",
  },
  userName: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    fontWeight: "700",
    color: "#212121",
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    color: "#212121",
    fontWeight: "400",
  },
  userPictureContainer: {
    marginBottom: 32,
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
});
