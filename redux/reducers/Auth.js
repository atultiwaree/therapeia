import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  profile: {
    privacyPolicyStatus: false,
    loggedIn : false
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.profile = {...action.payload};
    },

    setPrivacyPolicy: (state, action) => {
      state.profile.privacyPolicyStatus = action.payload.status;
    },

    resetUser: (state, action) => {
      state.profile = {};
    },
  },
});

export const {addUser, updateUser, resetUser, setPrivacyPolicy} = authSlice.actions;
export default authSlice.reducer;
