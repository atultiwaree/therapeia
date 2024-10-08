import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import commonStyle, {commonColor, commonSize} from '../Styles/AppStyles';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {navigate} from '../Navigation/RootNavigation';
import {useDispatch} from 'react-redux';
import {setPrivacyPolicy} from '../redux/reducers/Auth';

const PrivacyPolicy = () => {
  const dispatch = useDispatch();

  const handleSetPrivacyPolicy = () => {
    dispatch(setPrivacyPolicy({status: true}));
  };

  return (
    <View style={[commonStyle.container, commonStyle.everyCenter]}>
      <View style={styles.box}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/armor.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
        </View>

        <Text
          style={[commonStyle.boldTitle, {marginVertical: responsiveWidth(8)}]}>
          We value your Privacy
        </Text>

        <Text style={[commonStyle.boldTitle, {fontFamily: 'Poppins-Medium'}]}>
          We will not sell, distribute, or lease your Personal information to
          any third parties unless you consent, or unless such disclosure or use
          is required by law.
        </Text>

        <Text onPress={handleSetPrivacyPolicy} style={commonStyle.button}>
          Understood
        </Text>


      </View>
    </View>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  imageContainer: {
    alignSelf: 'center',
    width: responsiveWidth(30),
  },
  box: {
    width: '100%',
  },


});
