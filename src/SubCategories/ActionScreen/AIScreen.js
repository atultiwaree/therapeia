import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import commonStyle, {commonColor, commonSize} from '../../../Styles/AppStyles';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ActionTherapist from '../../Components/ActionTherapist';
import { navigate } from '../../../Navigation/RootNavigation';

const AIScreen = () => {
  return (
    <View style={commonStyle.container}>
      <Text
        style={[
          commonStyle.boldTitle,
          {fontFamily: 'Poppins-Medium', marginTop: responsiveWidth(2)},
        ]}>
        Talk to, Your AI Therapist
      </Text>

      <View style={{width: '100%', alignItems: 'center'}}>
        <ActionTherapist
          heading={'Ella'}
          title={'Your AI Therapist'}
          path={require('../../../assets/images/girl.jpeg')}
        />
      </View>

      <TouchableOpacity onPress={() => navigate('chatwindow')}>
        <Text
          style={[
            commonStyle.boldTitle,
            
            {fontFamily: 'Poppins-Medium', marginTop: responsiveWidth(2),},
          ]}>
          Go to chats
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AIScreen;

const styles = StyleSheet.create({});
