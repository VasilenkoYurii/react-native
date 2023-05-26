import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut } from "./operations";

const initialState = {
  user: { name: null, email: null, password: null },
  uid: null,
  posts: [],
};

/* 
posts [
{
    image: null,
    title: null,
    place: null,
    geo: null,
    coments: [ {
        userName: null,
        avatar: null,
        text: null,
        date: null,
    }, {} ],
    likes: 0,
}
]
*/

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
        state.user = payload.user;
        state.uid = payload.uid;
      })
      .addCase(register.rejected, () => {})
      .addCase(logIn.fulfilled, (state, { payload }) => {
        console.debug(payload);
        state.posts = payload.posts;
        state.user = payload.user;
        state.uid = payload.uid;
      })
      .addCase(logIn.rejected, () => {})
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state = initialState;
      })
      .addCase(logOut.rejected, () => {});
  },
});

// export const userReduser = userSlice.reducer;
