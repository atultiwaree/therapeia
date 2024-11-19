import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  Pressable,
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
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
    <View
      style={[commonStyle.container, {paddingHorizontal: responsiveWidth(10)}]}>
      <MarginVertical size={10} />
      {/* <Text style={commonStyle.boldTitle}>Personal Login</Text>

      

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
      </TouchableOpacity> */}

      <Text
        style={[
          commonStyle.fontBoldTitle,
          {fontSize: responsiveFontSize(3.5)},
        ]}>
        Login
      </Text>
      <MarginVertical size={2} />
      <Text
        style={[
          commonStyle.fontBoldTitle,
          {fontWeight: 400, fontSize: responsiveFontSize(1.5)},
        ]}>
        Login to Continue...
      </Text>

      <MarginVertical size={10} />

      <Text style={[commonStyle.label, {fontWeight: 500}]}>Enter Email</Text>
      <TextInput
        style={commonStyle.input}
        placeholder="Enter Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={[commonStyle.label, {fontWeight: 500}]}>Password</Text>
      <View style={commonStyle.passwordContainer}>
        <TextInput
          style={[commonStyle.input, {paddingRight: responsiveWidth(12)}]}
          placeholder="Enter Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={'#B2B2B2'}
        />
        <TouchableOpacity
          style={styles.eyeContainer}
          onPress={togglePasswordVisibility}>
          <Text style={commonStyle.eyeIcon}>{showPassword ? '🙈' : '👁️'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={[commonStyle.fontBoldTitle, styles.forgotPassword]}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <Pressable style={[commonStyle.button]} onPress={() => handleLogin()}>
        <Text
          style={[
            commonStyle.fontBoldTitle,

            {
              textAlign: 'center',
              color: '#fff',
            },
          ]}>
          Login
        </Text>
      </Pressable>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({

  forgotPassword: {
    textAlign: 'right',
    marginBottom: 20,
    fontSize: responsiveFontSize(1.8),
  },
  eyeContainer: {
    position: 'absolute',
    top: 12,
    right: 10,
    bottom: 0,
  },
});
