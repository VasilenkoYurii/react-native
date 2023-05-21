export const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return {
        ...state,
        name: action.newName,
      };
    case "email":
      return {
        ...state,
        email: action.newEmail,
      };
    case "password":
      return {
        ...state,
        password: action.newPassword,
      };
    case "reset":
      return {
        name: "",
        email: "",
        password: "",
      };
    default:
      return state;
  }
};
