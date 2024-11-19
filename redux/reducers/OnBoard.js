import {createSlice} from '@reduxjs/toolkit';
const initialState = {
   data : {
      shown : false
   }
};

const onBoardSlice = createSlice({
  name: 'onBoard',
  initialState,
  reducers: {
   
    setShownOnBoarding : (state, action) => {
        state.data.shown = action.payload.shown
    },

    resetUser: (state, action) => {
      state.data.shown = false;
    },
  },
});

export const {setShownOnBoarding} = onBoardSlice.actions;
export default onBoardSlice.reducer;
