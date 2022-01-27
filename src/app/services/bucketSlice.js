import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bucketlist: [
    { id: 0, text: "영화관 가기", completed: false },
    { id: 1, text: "여행가고싶당", completed: false },
    { id: 2, text: "맛집 투어", completed: false },
  ],
};

export const bucketSlice = createSlice({
  name: "bucketSlice",
  initialState,
  reducers: {
    addBucket: (state, action) => {
      state.bucketlist.push(action.payload);
      //   state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBucket } = bucketSlice.actions;

export default bucketSlice.reducer;
