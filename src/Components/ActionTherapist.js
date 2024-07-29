import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import commonStyle, {commonColor, commonSize} from '../../Styles/AppStyles';

import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { navigate } from '../../Navigation/RootNavigation';

const ActionTherapist = ({heading, title, path, type}) => {

    console.log(path)

  return (
    <TouchableOpacity onPress={() => {
      if(type === "real") {
        navigate("question")
      }
    }} style={styles.box}>
      <Image
        source={path}
        resizeMethod="resize"
        resizeMode="contain"
        style={{
          width: '70%',
          height: responsiveWidth(20),
        }}
      />

      <Text
        style={[
          commonStyle.boldTitle,
          {
            fontFamily: 'Poppins-SemiBold',
            fontSize: responsiveFontSize(2.0),
            marginTop: responsiveWidth(2),
          },
        ]}>
        {heading}
      </Text>
      <Text
        style={[
          commonStyle.boldTitle,
          {
            fontFamily: 'Poppins-Regular',
            fontSize: responsiveFontSize(1.6),
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ActionTherapist;

const styles = StyleSheet.create({
    box: {
      height: 'auto',
      width: responsiveWidth(40),
      padding: responsiveWidth(2),
      ...commonStyle.everyCenter,
      backgroundColor: commonColor.WHITE,
      margin: responsiveWidth(2),
      marginVertical: responsiveWidth(6),
      borderRadius: commonSize.BORDER_RADIUS,
      borderWidth: 1,
    },
});
  
