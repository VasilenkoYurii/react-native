import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { name: null, email: null, avatar: null },
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
    coments: [ '', '' ]
}
]
*/

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, () => {
        toast.error("Something went wrong, please try again.", {
          style: {
            width: "300px",
            height: "40px",
            borderRadius: "10px",
            fontSize: "20px",
          },
        });
      });
  },
});

// export const userReduser = userSlice.reducer;
