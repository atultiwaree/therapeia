import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  profile: {
    privacyPolicyStatus: false,
    loggedIn : false,
    email : undefined
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.profile = {...action.payload};
      state.profile.email = action.payload.email
    },

    setPrivacyPolicy: (state, action) => {
      state.profile.privacyPolicyStatus = action.payload.status;
    },

    setEmail : (state, action) => {
      state.profile.email = action.payload.email
    },

    resetUser: (state, action) => {
      state.profile = {};
    },
  },
});

export const {addUser, updateUser, resetUser, setPrivacyPolicy, setEmail} = authSlice.actions;
export default authSlice.reducer;
