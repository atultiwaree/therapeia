import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import commonStyle, {
  MarginVertical,
  commonColor,
  commonSize,
} from '../../Styles/AppStyles';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { navigate } from '../../Navigation/RootNavigation';

const SignUp = () => {
  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.boldTitle}>Sign up</Text>
      <Text
        style={[
          commonStyle.boldTitle,
          {fontFamily: 'Poppins-Medium', marginTop: responsiveWidth(2)},
        ]}>
        Already have an account, <Text onPress={() => navigate("Signin")} style={{color: '#548235'}}>Sign In</Text>
      </Text>

      <MarginVertical size={10} />

      <TextInput
        style={commonStyle.textInput}
        placeholder="Email Address"
        keyboardType="email-address"
        allowFontScaling
        cursorColor={commonColor.LIGHT_BORDER}
      />

      <TextInput
        style={[commonStyle.textInput]}
        placeholder="Password"
        secureTextEntry
        cursorColor={commonColor.LIGHT_BORDER}
      />

      <TextInput
        style={[commonStyle.textInput]}
        placeholder="Confirm Password"
        keyboardType="email-address"
        cursorColor={commonColor.LIGHT_BORDER}
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
        // onPress={(isChecked: boolean) => {console.log(isChecked)}}
        style={{width: responsiveWidth(80), alignSelf: 'center'}}
      />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
