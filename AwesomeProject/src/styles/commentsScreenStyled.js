import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#FFFFFF",
    borderStyle: "solid",
    borderTopColor: "#EEE",
    borderTopWidth: 1,
  },
  keyboardStyle: {
    width: "100%",
    height: "100%",
  },
  secondContainer: {
    display: "flex",

    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,

    justifyContent: "flex-end",
  },
  userPictureContainer: {
    width: "100%",
    height: 240,
    marginBottom: 8,

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 32,
  },
  userPicture: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    backgroundColor: "#E8E8E8",
  },
  commentsMainContainer: {
    display: "flex",
    flexDirection: "row",

    width: "100%",

    marginBottom: 24,
  },
  userCommentIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,

    marginRight: 16,
  },
  commentsTextcontainer: {
    flexShrink: 1,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.05)",

    padding: 16,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  userMessage: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
    textAlign: "left",
    marginBottom: 8,
  },
  userDateMessage: {
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    lineHeight: 12,
    color: "#BDBDBD",
    textAlign: "right",
  },
  accountCommentsTextcontainer: {
    flexShrink: 1,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.05)",

    padding: 16,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  accountUserCommentIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,

    marginLeft: 16,
  },

  commentInput: {
    width: "100%",
    height: 50,

    backgroundColor: "#F6F6F6",
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 25,

    marginBottom: 32,
    padding: 16,
  },
  submitSendMessBtn: {
    position: "absolute",
    top: 8,
    right: 8,

    backgroundColor: "#FF6C00",
    width: 34,
    height: 34,
    borderRadius: 17,

    justifyContent: "center",
    alignItems: "center",
  },
});
