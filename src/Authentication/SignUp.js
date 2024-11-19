import {Alert, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
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
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {navigate} from '../../Navigation/RootNavigation';
import firestore from '@react-native-firebase/firestore';
import {validEmail} from '../../Utility';
import auth, {firebase} from '@react-native-firebase/auth';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [passwword, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = useCallback(async () => {
    // Check if the user has agreed to terms and conditions
    if (!agree) {
      showMessage({
        message: 'You must agree to the terms and conditions',
        type: 'warning',
      });
      return;
    }

    if (email.length === 0) {
      showMessage({
        message: 'Please enter email',
        type: 'info',
      });
    } else if (!validEmail(email)) {
      showMessage({
        message: 'Please enter a valid email address',
        type: 'danger',
      });
    } else if (passwword.length === 0 || confirmPassword.length === 0) {
      showMessage({
        message: 'Please enter password and confirm password',
        type: 'warning',
      });
    } else if (passwword !== confirmPassword) {
      showMessage({
        message: 'Password and ConfirmPassword did not match',
        type: 'danger',
      });
    } else {
      try {
        let x = await auth().createUserWithEmailAndPassword(email, passwword);

        console.log(x);

        if (x.additionalUserInfo.isNewUser) {
          showMessage({
            message: 'Account created, please login',
            type: 'success',
          });

          setEmail('');
          setPassword('');
          setConfirmPassword('');
          setAgree(false); // Reset agree state if needed
          navigate('Signin');
        }
      } catch (error) {
        console.log(error);

        if (error.code === 'auth/email-already-in-use') {
          showMessage({
            message: 'That email address is already in use!',
            type: 'info',
          });
        } else if (error.code === 'auth/invalid-email') {
          showMessage({
            message: 'That email address is invalid!',
            type: 'danger',
          });
        } else if (error.code === 'auth/weak-password') {
          showMessage({
            message: 'Please use a strong password',
            type: 'danger',
          });
        }
      }
    }
  }, [email, passwword, confirmPassword, agree]);

  return (
    <GestureHandlerRootView
      style={[commonStyle.container, {paddingHorizontal: responsiveWidth(10)}]}>
      <MarginVertical size={10} />
      {/* <Text style={commonStyle.boldTitle}>Sign up</Text>
      <Text
        style={[
          commonStyle.boldTitle,
          {fontFamily: 'Poppins-Medium', marginTop: responsiveWidth(2)},
        ]}>
        Already have an account,{' '}
        <Text onPress={() => navigate('Signin')} style={{color: '#548235'}}>
          Sign In
        </Text>
      </Text>

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

      <TextInput
        style={[commonStyle.textInput]}
        placeholder="Confirm Password"
        keyboardType="email-address"
        cursorColor={commonColor.LIGHT_BORDER}
        onChangeText={t => setConfirmPassword(t)}
      />

      <MarginVertical size={10} />

      <BouncyCheckbox
        size={25}
        fillColor={commonColor.BLACK}
        unFillColor={commonColor.MAIN}
        text="I agree to the terms and conditions"
        iconStyle={{borderColor: 'red'}}
        innerIconStyle={{borderWidth: 2}}
        textStyle={{fontFamily: 'Poppins-Medium', textDecorationLine: 'none'}}
        onPress={isChecked => {
          setAgree(!agree);
        }}
        style={{width: responsiveWidth(80), alignSelf: 'center'}}
      />

      <Text style={commonStyle.button} onPress={handleSignUp}>
        Sign up
      </Text> */}

      <Text
        style={[
          commonStyle.fontBoldTitle,
          {fontSize: responsiveFontSize(3.5)},
        ]}>
        SignUp
      </Text>
      <MarginVertical size={2} />
      <Text
        style={[
          commonStyle.fontBoldTitle,
          {fontWeight: 400, fontSize: responsiveFontSize(1.5)},
        ]}>
        Already have an account,{' '}
        <Text onPress={() => console.log('fuck off')} style={{fontWeight: 500}}>
          SignIn
        </Text>
      </Text>
      <MarginVertical size={10} />

      <Text style={[commonStyle.label, {fontWeight: 500}]}>Enter email</Text>
      <TextInput
        style={[commonStyle.input, {paddingRight: responsiveWidth(12)}]}
        placeholder="Email Address"
        keyboardType="email-address"
        allowFontScaling
        cursorColor={commonColor.LIGHT_BORDER}
        onChangeText={t => setEmail(t)}
        placeholderTextColor={'#B2B2B2'}
        autoCapitalize='none'
      />

      
      <Text style={[commonStyle.label, {fontWeight: 500}]}>Password</Text>
      <View style={commonStyle.passwordContainer}>
        <TextInput
          style={[commonStyle.input, {paddingRight: responsiveWidth(12)}]}
          placeholder="Password"
          cursorColor={commonColor.LIGHT_BORDER}
          onChangeText={t => setPassword(t)}
          placeholderTextColor={'#B2B2B2'}
          secureTextEntry={!showPassword}
        />
        <Pressable
          style={styles.eyeContainer}
          onPress={togglePasswordVisibility}>
          <Text style={commonStyle.eyeIcon}>{showPassword ? '🙈' : '👁️'}</Text>
        </Pressable>
      </View>
      <Text style={[commonStyle.label, {fontWeight: 500}]}>
        Confirm Password
      </Text>

      <View style={commonStyle.passwordContainer}>
        <TextInput
          style={[commonStyle.input, {paddingRight: responsiveWidth(12)}]}
          placeholder="Confirm Password"
          keyboardType="email-address"
          cursorColor={commonColor.LIGHT_BORDER}
          onChangeText={t => setConfirmPassword(t)}
          placeholderTextColor={'#B2B2B2'}
          secureTextEntry={!showPassword}
        />
        <Pressable
          style={styles.eyeContainer}
          onPress={togglePasswordVisibility}>
          <Text style={commonStyle.eyeIcon}>{showPassword ? '🙈' : '👁️'}</Text>
        </Pressable>

      </View>
      <MarginVertical size={4}/>
      <BouncyCheckbox
        size={14}
        fillColor={commonColor.BLUE}
        unFillColor={'#fff'}
        text="I Agree to Terms &  Conditions"
        innerIconStyle={{borderWidth: 2}}
        textStyle={{
          fontFamily: 'Rubik',
          textDecorationLine: 'none',
          fontWeight: 400,
          color: commonColor.BLUE,
          fontSize: responsiveFontSize(1.8),
        }}
        onPress={isChecked => {
          setAgree(!agree);
        }}
        style={{width: responsiveWidth(80), alignSelf: 'center'}}
      />

      <Pressable style={[commonStyle.button]} onPress={() => handleSignUp()}>
        <Text
          style={[
            commonStyle.fontBoldTitle,

            {
              textAlign: 'center',
              color: '#fff',
            },
          ]}>
          SignUp
        </Text>
      </Pressable>
    </GestureHandlerRootView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  eyeContainer: {
    position: 'absolute',
    right: 10,
    bottom: 30,
    zIndex : 0.6
  },
});
