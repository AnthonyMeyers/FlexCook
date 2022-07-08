import { createSlice } from "@reduxjs/toolkit";

const initialState = { message: null };

const messageSlice = createSlice({
  name: "messageState",
  initialState,
  reducers: {
    //set message in state
    setmessage(state, { payload: { message } }) {
      state.message = message;
    },
    clearmessage(state) {
      state.message = null;
    },
  },
});

export default messageSlice;
export const { setmessage, clearmessage } = messageSlice.actions;
