import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import commonStyle, {
  MarginVertical,
  commonColor,
  commonSize,
} from '../../Styles/AppStyles';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {navigate} from '../../Navigation/RootNavigation';
import firestore from '@react-native-firebase/firestore';
import {validEmail} from '../../Utility';
import auth from '@react-native-firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [passwword, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSignUp = useCallback(async () => {
    console.log(email, passwword, confirmPassword);

    console.log(email);

    console.log(validEmail(email));

    console.log(email.length);

    if (email.length === 0) {
      Alert.alert('Please enter email ');
    } else {
      if (validEmail(email)) {
        console.log('XXX');

        if (passwword.length === 0 || confirmPassword.length === 0) {
          Alert.alert('Please enter valid password and confirmpassword');
        } else {
          console.log('XXXX');
          if (passwword === confirmPassword) {
            // firestore()
            // .collection('Users')
            // .add({
            //   email,
            //   passwword,
            // })
            // .then(() => {
            //   console.log('User added!');
            // });


            try {
              let x = await auth().createUserWithEmailAndPassword(email, passwword);

              
              if(x.additionalUserInfo.isNewUser) {
                Alert.alert("User created")

                setEmail("")
                setPassword("")
                setAgree(false)
                navigate("Signin")

              }



            } catch(error) {

              if (error.code === 'auth/email-already-in-use') {
                Alert.alert('That email address is already in use!');
              }

              if (error.code === 'auth/invalid-email') {
                Alert.alert('That email address is invalid!');
              }


              if(error.code === 'auth/weak-password') {
                Alert.alert("Please use strong password")
              }

            }



          } else {
            Alert.alert('Password and ConfirmPassword did not matched');
          }
        }
      } else {
        Alert.alert('Please enter valid email address');
      }
    }
  }, [email, passwword, confirmPassword]);

  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.boldTitle}>Sign up</Text>
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
      </Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
