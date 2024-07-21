import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
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

const SignIn = () => {
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
      />

      <TextInput
        style={[commonStyle.textInput]}
        placeholder="Password"
        secureTextEntry
        cursorColor={commonColor.LIGHT_BORDER}
      />

      <MarginVertical size={10} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('privacyPolicy')}>
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
    marginTop : responsiveWidth(16)
  },
});
