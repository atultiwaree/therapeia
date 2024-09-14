import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import commonStyle, {
  MarginVertical,
  commonColor,
  commonSize,
} from '../../Styles/AppStyles';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import {validEmail} from '../../Utility';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {addUser} from '../../redux/reducers/Auth';
import {showMessage, hideMessage} from 'react-native-flash-message';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = useCallback(async () => {
    // Check if email is provided
    if (!email) {
      showMessage({
        message: 'Please enter email',
        type: 'danger',
      });
      return; // Exit function early
    }
  
    // Check if password is provided
    if (!password) {
      showMessage({
        message: 'Please enter password',
        type: 'warning',
      });
      return; // Exit function early
    }
  
    // Check if email is valid
    if (!validEmail(email)) {
      showMessage({
        message: 'Please enter a valid email',
        type: 'danger',
      });
      return; // Exit function early
    }
  
    try {
      // Attempt to sign in with provided email and password
      const result = await auth().signInWithEmailAndPassword(email, password);
  
      // Dispatch action with user details on successful login
      dispatch(
        addUser({
          loggedIn: true,
          email: result.user.email,
        }),
      );
      

      console.log(result);
    } catch (error) {
      // Handle any errors during sign-in
      console.log(error);
      showMessage({
        message: 'Login failed. Please check your credentials.',
        type: 'danger',
      });
    }
  }, [email, password, dispatch]);

  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.boldTitle}>Personal Login</Text>

      <MarginVertical size={10} />

      <TextInput
        style={commonStyle.textInput}
        placeholder="Email Address"
        keyboardType="email-address"
        allowFontScaling
        cursorColor={commonColor.LIGHT_BORDER}
        onChangeText={t => setEmail(t)}
      />

      <TextInput
        style={[commonStyle.textInput]}
        placeholder="Password"
        secureTextEntry
        cursorColor={commonColor.LIGHT_BORDER}
        onChangeText={t => setPassword(t)}
      />

      <MarginVertical size={10} />

      <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
        <Text
          style={[
            commonStyle.boldTitle,
            {
              fontFamily: 'Poppins-SemiBold',
              fontSize: commonSize.BTN_FONT_SIZE,
            },
          ]}>
          Corporate Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  button: {
    borderColor: commonColor.LIGHT_BORDER,
    borderWidth: commonSize.BORDER_WIDTH,
    borderRadius: commonSize.BORDER_RADIUS,
    width: responsiveWidth(80),
    alignSelf: 'center',
    padding: responsiveWidth(3),
    marginTop: responsiveWidth(16),
  },
});
