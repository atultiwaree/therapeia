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
import {navigate} from '../../Navigation/RootNavigation';
import firestore, { Filter } from '@react-native-firebase/firestore';
import {validEmail} from '../../Utility';
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/reducers/Auth';



const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = useCallback(async () => {




    if (email !== '') {
      if (password !== '') {
        if (validEmail(email)) {



          try {


            let x = await auth().signInWithEmailAndPassword(email, password)

            dispatch(addUser({
              loggedIn : true,
              email : x.user.email
            }));

            console.log(x)


          } catch(e) {

          }
          
          
          
            
        } else {
          Alert('Please enter a valid email');
        }
      } else {
        Alert.alert('Please enter password');
      }
    } else {
      Alert.alert('Please enter email');
    }
  }, [email, password]);

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
