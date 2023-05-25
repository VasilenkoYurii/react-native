import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    height: 812,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  formContainer: {
    position: "relative",
    backgroundColor: "#ffffff",
    width: "100%",
    height: 489,
    paddingRight: 16,
    paddingLeft: 16,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,

    alignItems: "center",
  },
  formText: {
    backgroundColor: "#fff",
  },
  formTitle: {
    // fontFamily: "Roboto",
    color: "#212121",
    marginTop: 32,
    marginBottom: 33,
    fontSize: 30,
    lineHeight: 35.16,
  },
  inputBox: { width: "100%" },
  formInput: {
    marginBottom: 16,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 14,

    backgroundColor: "#f6f6f6",
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    width: "100%",

    fontSize: 16,
    lineHeight: 18.75,

    overflow: "hidden",
  },
  passwordcontainer: {
    position: "relative",
    width: "100%",
  },
  showPasswordContainer: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  showPasswordText: {
    color: "#1B4371",
    fontSize: 16,
    padding: 16,
    lineHeight: 18.75,
  },
  formLastInput: {
    marginBottom: 43,

    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 14,

    backgroundColor: "#f6f6f6",
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    width: "100%",

    fontSize: 16,
    lineHeight: 18.75,
  },
  activeFormInput: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  },
  prgIfWasAcc: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
  },
  prgIfWasAccSpan: {
    textDecorationLine: "underline",
  },
});
